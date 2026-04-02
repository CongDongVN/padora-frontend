import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProductList from "../components/ProductList"
import CategorySection from "../components/CategorySection"
import StoryGrid from "@/components/StoryGrid"
import ExploreSection from "@/components/ExploreSection"
import StorySection from "../components/StorySection"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <main>

      <Header />

      <Hero />

      <ProductList /> 

      <CategorySection /> 

      <StoryGrid />

      <StorySection />

      <ExploreSection />

      <Footer />

    </main>
  )
}