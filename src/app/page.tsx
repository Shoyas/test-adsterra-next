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
        <p>Adsterra Ads Testing-1</p>
        <Banner300_250 />
      </div>
      <div>
        <h1>This Next JS Project is using to implement Adsterra Ads Testing</h1>
        <p>Because I&apos;ve made a gaming website using Next JS, That website is ready to use Adsterra Ads, But I&apos;ve not implement Adsterra with Next JS App before.</p>
      </div>
      <div>
        <p>Adsterra Ads Testing-2</p>
        <Banner728_90 />
      </div>
      <div>
        <p>Adsterra Ads Testing-3</p>
        <Banner160_300 />
      </div>
      <div>
        <p>Adsterra Ads Testing-4</p>
        <Banner468_60 />
      </div>
      <div>
        <p>Adsterra Ads Testing-5</p>
        <Banner320_50 />
      </div>
      <div>
        <p>Adsterra Ads Testing-6</p>
        <Banner160_600 />
      </div>
    </div>
  );
}
