'use client';
import { useRouter } from "next/navigation";
const Home = () => {
    const router = useRouter();
    router.push("/admin/services");
};

export default Home;