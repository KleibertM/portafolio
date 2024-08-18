import { lazy, Suspense } from "react"
import SkeletonCard from "../Skeletor";
const Hello = lazy(() => import('../Hello/Hello'));
const Nav = lazy(() => import('../Navbar/Nav'));
const Navbar = lazy(() => import('../Navbar/Navbar'));
const Home = () => {
    return (
        <>
            <Nav />
            <Suspense fallback={<SkeletonCard />}>
                <Hello />
            </Suspense>
            <Suspense fallback={<SkeletonCard />}>
                <Navbar />
            </Suspense>
        </>
    )
}
export default Home