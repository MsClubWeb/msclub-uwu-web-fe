import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    name: "Sahan Perera",
    username: "@sahan_dev",
    body: "MS Club UWU transformed my understanding of cloud technologies. The Azure workshops were incredibly hands-on and practical.",
    img: "https://avatar.vercel.sh/sahan",
  },
  {
    name: "Nimasha Silva",
    username: "@nimasha_tech",
    body: "The networking opportunities here are amazing. I connected with industry professionals who guided my career path.",
    img: "https://avatar.vercel.sh/nimasha",
  },
  {
    name: "Kasun Fernando",
    username: "@kasun_coder",
    body: "From beginner to Microsoft certified - this club provided all the resources and support I needed to succeed.",
    img: "https://avatar.vercel.sh/kasun",
  },
  {
    name: "Tharushi Jayasinghe",
    username: "@tharushi_ai",
    body: "The AI and machine learning sessions opened up a whole new world for me. Excellent learning environment!",
    img: "https://avatar.vercel.sh/tharushi",
  },
  {
    name: "Dilshan Rathnayake",
    username: "@dilshan_dev",
    body: "Best decision I made at university! The practical projects and mentorship helped me land my dream internship.",
    img: "https://avatar.vercel.sh/dilshan",
  },
  {
    name: "Amaya Wickramasinghe",
    username: "@amaya_cloud",
    body: "The community here is supportive and inspiring. Every event teaches something new about Microsoft technologies.",
    img: "https://avatar.vercel.sh/amaya",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full max-w-[320px] cursor-pointer overflow-hidden rounded-xl border p-6 mx-3",
        // Exact same styling as homepage feature cards
        "bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 group"
      )}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
      <div className="flex flex-row items-center gap-3 mb-4">
        <img 
          className="rounded-full ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300" 
          width="40" 
          height="40" 
          alt={`${name} avatar`} 
          src={img} 
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-gray-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="text-sm text-muted-foreground leading-relaxed">
        "{body}"
      </blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    // Matching exact background from homepage - plain background
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">
            Member Reviews
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-black">
            Hear What Our Members Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how our community has helped students grow their skills and advance their careers.
          </p>
        </div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:25s]">
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          
          {/* Gradient fade edges matching homepage background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
}