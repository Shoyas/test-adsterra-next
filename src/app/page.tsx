import Banner160_300 from "@/ui/adsterra/banner160_300";
import Banner160_600 from "@/ui/adsterra/banner160_600";
import Banner300_250 from "@/ui/adsterra/banner300_250";
import Banner320_50 from "@/ui/adsterra/banner320_50";
import Banner468_60 from "@/ui/adsterra/banner468_60";
import Banner728_90 from "@/ui/adsterra/banner728_90";



export default function HomePage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <p>Adsterra Ads Testing-1 Banner300_250</p>
        <Banner300_250 />
      </div>
      <div>
        <h1>This Next JS Project is using to implement Adsterra Ads Testing</h1>
      </div>
      <div>
        <p>Adsterra Ads Testing-2 Banner728_90</p>
        <Banner728_90 />
      </div>
      <div>
        <p>Adsterra Ads Testing-3 Banner160_300</p>
        <Banner160_300 />
      </div>
      <div>
        <p>Adsterra Ads Testing-4 Banner468_60</p>
        <Banner468_60 />
      </div>
      <div>
        <p>Adsterra Ads Testing-5 Banner320_50</p>
        <Banner320_50 />
      </div>
      <div>
        <p>Adsterra Ads Testing-6 Banner160_600</p>
        <Banner160_600 />
      </div>
    </div>
  );
}
