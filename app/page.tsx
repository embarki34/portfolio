import Intro from "@/components/intro";
import Meteors from "@/components/magicui/meteors";
import Achievements from "@/components/Achievements";
import Education from "@/components/education";
import TechnicalSkills from "@/components/TechnicalSkills";
import Experince from "@/components/experince";
import {DockDemo} from "@/components/dockeMe";

export default function Home() {
    return (

        <div
            className="relative pt-20 w-full max-w-5xl mx-auto min-h-screen p-4 sm:p-8 pb-20 font-[family-name:var(--font-geist-sans)] overflow-hidden  dark:bg-gray-900">
            <Meteors />
            <main className="flex flex-col gap-12 items-center sm:items-start">
                <section className="pt-20 w-full max-w-3xl mx-auto" id="intro">
                    <Intro/>
                    <br/>
                    <DockDemo/>
                </section>

                <div className="w-full max-w-3xl mx-auto">
                    <hr className="w-1/2 h-1 mx-auto my-6 bg-gray-300 border-0 rounded dark:bg-gray-700"/>
                </div>
                <section className="w-full max-w-3xl mx-auto" id="education">
                    <Education/>
                </section>
                <div className="w-full max-w-3xl mx-auto">
                    <hr className="w-1/2 h-1 mx-auto my-6 bg-gray-300 border-0 rounded dark:bg-gray-700"/>
                </div>
                <section className="w-full max-w-3xl mx-auto" id="technical-skills">
                    <TechnicalSkills/>
                </section>
                <div className="w-full max-w-3xl mx-auto">
                    <hr className="w-1/2 h-1 mx-auto my-6 bg-gray-300 border-0 rounded dark:bg-gray-700"/>
                </div>
                <section className="w-full max-w-3xl mx-auto" id="achievements">
                    <Achievements/>
                </section>
                <div className="w-full max-w-3xl mx-auto">
                    <hr className="w-1/2 h-1 mx-auto my-6 bg-gray-300 border-0 rounded dark:bg-gray-700"/>
                </div>
                <section className="w-full max-w-3xl mx-auto" id="achievements">
                    <Experince/>
                </section>
            </main>
        </div>
    );
}
