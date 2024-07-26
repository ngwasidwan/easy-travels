import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export async function getLuxuryBuses() {
  const { data, error } = await supabase.from("luxury_buses").select();

  if (error) notFound();
  return data;
}

export async function getBus(busId) {
  const { data, error } = await supabase
    .from("luxury_buses")
    .select()
    .eq("id", busId)
    .single();

  if (error) notFound();
  return data;
}

export async function getUserReservations(tel) {
  //user needs to make a reservation before they can access seats page

  const { data: userReservations, error } = await supabase
    .from("userReservations")
    .select("*")
    .eq("phoneNumber", tel);

  if (error) throw new Error("Reservation could not be found. ");
  return userReservations;
}

export async function getPaidReservationsForCurrentSession({
  session,
  selectedBus,
}) {
  console.log(selectedBus, session);
  const { data: allPaidReservations, error } = await supabase
    .from("userReservations")
    .select("*")
    .eq("paid", true)
    .eq("session", session)
    .eq("selectedBus", selectedBus);

  if (error) throw new Error("Reservation could not be found. ");
  return allPaidReservations?.length ? allPaidReservations : [];
}

export async function getAllPaidReservations() {
  const { data: paidReservations, error } = await supabase
    .from("userReservations")
    .select("*");

  if (error) throw new Error("Unable to load reservations");
  return paidReservations;
}
