import Hero from "@/components/landing_page/hero";
import SectionMaoNaMassa from "@/components/landing_page/sectionMaoNaMassa";
import SectionRestaurant from "@/components/landing_page/sectionRestaurant";
import SectionServices from "@/components/landing_page/sectionServices";

export default function Home() {
    return (
        <main className="bg-gray-50">
            <Hero />
            <SectionServices />
            <SectionRestaurant />
            <SectionMaoNaMassa />
        </main>
    )
}