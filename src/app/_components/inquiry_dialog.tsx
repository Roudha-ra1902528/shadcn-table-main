"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InquiryForm } from './inquiry-form'

type InquiryFormSchema = {
  firstName: string;
  lastName: string;
};

export function InquiryDialog() {
  const form = useForm<InquiryFormSchema>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(data: InquiryFormSchema) {
    console.log("Inquiry submitted:", data);
    // TODO: Call your server action or API here (e.g., submitInquiryQFIU(data))
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="ml-[18.5rem] mt-4">
        <Button variant="outline">Submit Inquiry to QFIU</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="mb-4">
          <DialogTitle>Submit Inquiry To QFIU</DialogTitle>
          <DialogDescription>
            Please enter your full name to begin your inquiry.
          </DialogDescription>
        </DialogHeader>

        {/* 🧾 Replace description with the form */}
        <InquiryForm form={form} onSubmit={onSubmit}>
          <DialogFooter className="flex gap-2 pt-2">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </InquiryForm>
      </DialogContent>
    </Dialog>
  );
}