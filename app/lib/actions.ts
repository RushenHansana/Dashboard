'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect} from 'next/navigation';
import { signIn } from '@/auth'; 
import { AuthError } from 'next-auth';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer.',
    }),
    amount: z.coerce
        .number()
        .gt(0, {message :'Amount must be greater than $0.'}),
    status: z.enum(['pending', 'paid'],{
        invalid_type_error: 'Please select a case status.',
    }),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id:true,date: true });

const postRequest = async (details: any) => {
    const response = await fetch("https://7d7b-112-134-140-39.ngrok-free.app/case", {
        method: 'POST',
        body : JSON.stringify({
            id: '45',
            client_id: details['client_id'],
            title: details['title'],
            description: details['description'],
            status: 'Open',
            assessor_id: details['assessor_id'],
        }),
    });
    return response.json();
};

// This is temporary until @types/react-dom is updated
export type State = {
    errors?: {
      customerId?: string[];
      amount?: string[];
      status?: string[];
    };
    message?: string | null;
  };

  export async function createInvoice(prevState: State, formData: FormData) {
    // Validate form using Zod
    // const validatedFields = CreateInvoice.safeParse({
    //   customerId: formData.get('customerId'),
    //   amount: formData.get('amount'),
    //   status: formData.get('status'),
    // });
   
    // // If form validation fails, return errors early. Otherwise, continue.
    // if (!validatedFields.success) {
    //   return {
    //     errors: validatedFields.error.flatten().fieldErrors,
    //     message: 'Missing Fields. Failed to Create Invoice.',
    //   };
    // }
   
    // // Prepare data for insertion into the database
    // const { customerId, amount, status } = validatedFields.data;
    // const amountInCents = amount * 100;
    // const date = new Date().toISOString().split('T')[0];
   
    // Insert data into the database
    // try {
    //   await sql`
    //     INSERT INTO invoices (customer_id, amount, status, date)
    //     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    //   `;
    // } catch (error) {
    //   // If a database error occurs, return a more specific error.
    //   return {
    //     message: 'Database Error: Failed to Create Invoice.',
    //   };
    // }
    const id = formData.get('id');
    const client_id = formData.get('client_id');
    const title = formData.get('title');
    const description = formData.get('description');
    const status = "Open";
    const assessor_id = formData.get('assessor_id');
    const newCase = {id: formData.get('case id'), client_id: formData.get('client_id'), title: formData.get('title'), description: formData.get('description'),status: "Open", assessor_id: formData.get('assessor_id')};
    try {
      const response = await fetch("https://7d7b-112-134-140-39.ngrok-free.app/case", {
        method: 'POST',
        body : JSON.stringify({
            id: newCase['id'],
            client_id: newCase['client_id'],
            title: newCase['title'],
            description: newCase['description'],
            status: newCase['status'],
            assessor_id: newCase['assessor_id'],
        }),
    });
    } catch (error) { 
      return {
        message: 'Database Error: Failed to Create Case.',
      };
    }


   
    // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath('/dashboard/cases');
    redirect('/dashboard/cases');
  }
  export async function updateInvoice(
    id: string,
    prevState: State,
    formData: FormData,
  ) {
    const validatedFields = UpdateInvoice.safeParse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update Invoice.',
      };
    }
   
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
   
    try {
      await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
    } catch (error) {
      return { message: 'Database Error: Failed to Update Invoice.' };
    }
   
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }

  export async function deleteInvoice(id: string) {
    // throw new Error('Failed to delete .');

    try {
      await sql`DELETE FROM invoices WHERE id = ${id}`;
      revalidatePath('/dashboard/invoices');
      return { message: 'Deleted Invoice.' };
    } catch (error) {
      return { message: 'Database Error: Failed to Delete Invoice.' };
    }
  }

  export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }
  