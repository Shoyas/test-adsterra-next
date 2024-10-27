import Banner300_250 from "@/ui/adsterra/banner300_250";
import Banner468_60 from "@/ui/adsterra/banner468_60";



export default function HomePage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <Banner300_250/>
      </div>
      <div>
        <h1>This Next JS Project is using to implement Adsterra Ads Testing</h1>
        <p>Because I&apos;ve made a gaming website using Next JS, That website is ready to use Adsterra Ads, But I&apos;ve not implement Adsterra with Next JS App before.</p>
      </div>
      <div>
        <Banner468_60 />
      </div>
    </div>
  );
}
