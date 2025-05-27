import Calendar from "@/components/Calendar";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Welcome!</h1>
      <p className="text-center mb-8">
        This is a simple Next.js site with a Google Calendar integration.
      </p>
      <Calendar />
    </div>
  );
}
