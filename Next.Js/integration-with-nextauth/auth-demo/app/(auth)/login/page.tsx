import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Auth Demo",
};

export default function Login() {
  return (
    <main className="max-w-sm pb-12 mx-auto">
      <section>
        <Form />
      </section>
    </main>
  );
}
