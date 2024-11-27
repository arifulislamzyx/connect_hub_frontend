// app/auth/error.tsx or pages/auth/error.tsx
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Error: {error}</h1>
      <p>Something went wrong during authentication. Please try again.</p>
    </div>
  );
};

export default ErrorPage;
