import { Title } from "@/components/ui/title";
import ApplyForm from "./components/apply-form";

export default function ApplyPage() {
  return (
    <div className="flex items-center justify-center pt-32 pb-16 px-8">
      <div className="max-w-2xl mx-auto sm:px-8 w-full space-y-8 sm:border py-8 rounded-lg">
        <Title variant="h2" className="text-center">
          Apply Form
        </Title>
        <ApplyForm />
      </div>
    </div>
  );
}
