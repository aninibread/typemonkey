import { useParams } from "@remix-run/react";


export default function Index() {
    const params = useParams();

    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-16">
          <header className="flex flex-col items-center gap-9">
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
              Welcome to Type Monkey
            </h1>
          </header>
          <section>
            <h2>
              Room id: {params.roomId}
            </h2>
          </section>
        </div>
      </div>
    );
  }