"use server";

import { redirect } from "next/navigation";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "/activity" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function reserveSeat(formData) {
  const hiddenData = formData.get("selectedBus").split("@");
  const destination = formData.get("destination");
  const username = formData.get("username");
  const phoneNumber = formData.get("phoneNumber");
  const numSeats = +formData.get("numSeats");
  const session = formData.get("session");

  const [selectedBus, id] = hiddenData;

  const reservationTime = Math.floor(new Date().getTime() / 1000);

  const { error } = await supabase
    .from("userReservations")
    .insert([
      {
        destination,
        phoneNumber,
        username,
        numSeats,
        session,
        selectedBus,
        reservationTime,
      },
    ])
    .select();

  if (error) throw new Error("Unable to make a reservation");

  redirect(
    `/luxury_buses/${id}/seats?tel=${phoneNumber}&time=${reservationTime}`
  );
}

export async function confirmSelectedSeat({ reservationTime, seatsArr }) {
  const { data, error } = await supabase
    .from("userReservations")
    .update({ selectedSeat: seatsArr })
    .eq("reservationTime", reservationTime)
    .select();
  if (error) throw new Error("Unable to confirm reservation");
  return data;
}

//confirm payment
export async function confirmReservation(data) {
  const { id, amount } = data;

  const { error } = await supabase
    .from("userReservations")
    .update({ paid: true, amountPaid: amount })
    .eq("id", id)
    .select();
  if (error) throw new Error("Unable to confirm payment");

  revalidatePath("/activities/dashboard");
}

//edit session
export async function rescheduleSession(data) {
  const { id, editSession } = data;

  const { error } = await supabase
    .from("userReservations")
    .update({ session: editSession })
    .eq("id", id)
    .select();
  if (error) throw new Error("Unable to reschedule current session");

  revalidatePath("/activities/dashboard");
}

//delete reservation

export async function deleteReservation(id) {
  const { error } = await supabase
    .from("userReservations")
    .delete()
    .eq("id", id);
  if (error) throw new Error("Unable to delete reservation");

  revalidatePath("/activities/dashboard");
}
