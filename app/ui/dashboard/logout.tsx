'use server';
import { signOut } from '@/auth'; // Replace with your signOut logic

export default async function Logout() {
  
    await signOut();
}