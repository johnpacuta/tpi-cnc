"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./shared/ContactForm";

type ContactModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
        </DialogHeader>
        <ContactForm 
          title="Get in Touch"
          subtitle="Tell us about your Renishaw product needs and we'll get back to you with a quote."
          className="bg-transparent p-0"
        />
      </DialogContent>
    </Dialog>
  );
} 