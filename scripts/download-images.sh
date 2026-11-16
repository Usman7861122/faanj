#!/usr/bin/env bash
# Downloads actual images from the old website into public/images
# Run from project root:  bash scripts/download-images.sh
set -u
B="https://footandanklespecialistsofnj.com/wp-content/uploads"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 Chrome/120 Safari/537.36"
get() { # url dest
  mkdir -p "$(dirname "$2")"
  if curl -fsSL -A "$UA" "$1" -o "$2"; then echo "ok   $2"; else echo "FAIL $1"; fi
}

# Team
get "$B/2025/04/Krupa-Patel.webp"            public/images/team/krupa-patel.webp
get "$B/2025/04/Obinna-O.-Mgbako.webp"       public/images/team/obinna-mgbako.webp
get "$B/2025/04/Yu-Ching-Terence.webp"       public/images/team/yu-ching-chi.webp
get "$B/2025/05/Lara-Kozin-e1747057712450.webp" public/images/team/lara-kozin.webp
get "$B/2026/05/group-picture-1.png"         public/images/team/group.png
get "$B/2026/05/group3-1.png"                public/images/team/group-2.png

# Services
for s in Achilles-Tendonitis Gout Hammer-Toe Ankle-Injuries Heel-Pain Heel-Spur Ingrown-Toenail Athletes-Foot; do
  l=$(echo "$s" | tr 'A-Z' 'a-z')
  get "$B/2025/04/$s.jpg" "public/images/services/$l.jpg"
done

# Site / office / blog
get "$B/2025/04/Office.webp"                 public/images/site/office.webp
get "$B/2025/04/Why-Us.jpg"                  public/images/site/why-us.jpg
get "$B/2025/04/why-4.jpg"                   public/images/site/why-4.jpg
get "$B/2025/04/shutterstock_1889144953.webp" public/images/site/care.webp
get "$B/2025/04/podiatry.png"                public/images/site/podiatry.png
get "$B/2025/04/fallnack.jpg"                public/images/site/video-poster.jpg
get "$B/2025/04/Foot-Pain-After-Exercise.png" public/images/site/blog-exercise.png
get "$B/2026/01/8520.jpg"                    public/images/site/blog-1.jpg
get "$B/2026/01/129705.jpg"                  public/images/site/blog-2.jpg

# Insurance logos
for f in 1771751.png Insurance-1.png Insurance-12.png Insurance-13.jpg Insurance-14.png Insurance-15.png Insurance-16.png Insurance-17.png Insurance-18.png Insurance-119.png Insurance-1112.png; do
  get "$B/2025/04/$f" "public/images/insurance/$f"
done
echo "Finished."
