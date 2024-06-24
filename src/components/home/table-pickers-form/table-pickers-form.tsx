"use client";

import { Label } from "@/components/ui/label";
import { Button } from "../../ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";

export default function TablePickersForm() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add Picker</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[95%] rounded-lg">
        <DialogHeader>
          <DialogTitle>Add picker</DialogTitle>
        </DialogHeader>
        <div>
          <Label htmlFor="email">Name</Label>
          <Input type="email" id="email" placeholder="Insert name" />
        </div>
        <div>
          <Label htmlFor="email">Adrees</Label>
          <Input type="email" id="email" placeholder="Insert adrees" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <PhoneInput
            type="text"
            id="phone"
            placeholder="Insert phone"
            defaultCountry="CO"
          />
        </div>
        <div className="flex flex-row gap-x-4">
          <div>
            <Label htmlFor="email">Material name</Label>
            <Input type="email" id="email" placeholder="Insert material name" />
          </div>
          <div>
            <Label htmlFor="email">Quantity on kg</Label>
            <Input type="email" id="email" placeholder="Insert quantity" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
