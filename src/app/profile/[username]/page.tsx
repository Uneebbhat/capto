import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  return (
    <section className="container mx-auto py-5">
      <div className="flex flex-col gap-4 mb-8">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/profile-placeholder.jpg" alt="Uneeb's Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">Uneeb</h1>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Full Name</Label>
          <Input id="username" name="username" placeholder="Enter your username" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="Enter your email" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+92XXXXXXXXXX" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            placeholder="Write a short bio about yourself..."
            className="min-h-[100px]"
          />
        </div>

        <Button className="mt-4 w-full">
          Save Changes
        </Button>
      </div>
    </section>
  );
}
