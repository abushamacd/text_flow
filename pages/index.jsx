import CustomHead from "@/components/CustomHead";

export default function Home() {
  return (
    <>
      <CustomHead title={"Welcome"} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button class="btn btn-primary">Button</button>
    </>
  );
}
