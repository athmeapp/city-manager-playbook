import { PlaybookSidebar, type NavSection } from "@/components/playbook/Sidebar";
import { SectionHeader } from "@/components/playbook/SectionHeader";
import { AarhusCallout } from "@/components/playbook/AarhusCallout";
import { CheckItem } from "@/components/playbook/CheckItem";
import logo from "@/assets/athme-logo-mark.png";
import fbPost from "@/assets/aarhus-fb-post.png";
import communityPhoto from "@/assets/athme-community.jpg";
import logoMark from "@/assets/athme-logo-mark.png";
import {
  Users,
  MapPin,
  Handshake,
  Megaphone,
  CalendarDays,
  UserCheck,
  MessageSquare,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Circle,
  XCircle,
  Beer,
  Trophy,
  Rocket,
  Star,
} from "lucide-react";

const sections: NavSection[] = [
  { id: "summary", label: "Welcome, city manager" },
  { id: "city-selection", label: "1 · Your role" },
  { id: "city-manager", label: "2 · Your opportunity" },
  { id: "partnerships", label: "3 · Partnerships" },
  { id: "promotion", label: "4 · Promotion" },
  { id: "launch-weekend", label: "5 · Launch weekend" },
  { id: "hosts", label: "6 · Host recruitment" },
  { id: "feedback", label: "7 · Feedback" },
  { id: "stabilize", label: "8 · Stabilizing" },
  { id: "checklist", label: "Minimum requirements" },
  { id: "risks", label: "Risks of launching too early" },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="mx-auto flex w-full max-w-[1400px] md:flex-row flex-col">
        <PlaybookSidebar sections={sections} />

        <main className="flex-1 px-5 md:px-12 lg:px-16 py-10 md:py-16 max-w-4xl">
          {/* Hero */}
          <section className="mb-20">
            <div className="md:hidden mb-6">
              <img src={logo} alt="athme" className="h-9 w-auto" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-athme-sky mb-4">
              City Manager Playbook · v1.0
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tight">
              Launch your city.
              <br />
              <span className="text-gradient-brand">Build your community.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              You are the face of athme on the ground. This is the playbook
              we built with you in mind — the same steps that worked in
              Copenhagen and Aarhus, now in your hands.
            </p>
          </section>

          {/* Summary */}
          <section id="summary" className="scroll-mt-8 mb-24">
            <div className="rounded-3xl border border-athme-sky/30 bg-gradient-soft p-7 md:p-10 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-athme-sky mb-3">
                Welcome
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
                You are why this works.
              </h2>
              <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                The city has been chosen. The model is proven. What
                happens next depends on you. A great launch needs four
                things in place: an active expat and student layer,
                enough venues to run a varied program, venue partners
                you can trust, and <strong>you</strong> — present,
                consistent, and genuinely energised by people. Get those
                four right and the city builds itself around you.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Users, text: "Active expat & student layer" },
                  { icon: MapPin, text: "Enough venues for a varied program" },
                  { icon: Handshake, text: "Venues open to partner pre-launch" },
                  { icon: UserCheck, text: "You, on the ground, every week" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 rounded-xl bg-card/70 border border-border px-4 py-3"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 1 — Your role */}
          <section id="city-selection" className="scroll-mt-8 mb-24">
            <SectionHeader
              number="01"
              eyebrow="Start here"
              title="Your role as city manager"
              lead="The city has already been validated — population, international layer, sports infrastructure. Your job is to turn that potential into a living community."
            />

            <h3 className="font-display text-xl font-bold mt-8 mb-3">
              What you own
            </h3>
            <ul className="space-y-2 text-foreground/85">
              <li className="flex gap-3"><Circle className="h-2 w-2 mt-2 fill-athme-sky text-athme-sky shrink-0" /><span><strong>The face of athme locally.</strong> When people think of athme in your city, they think of you.</span></li>
              <li className="flex gap-3"><Circle className="h-2 w-2 mt-2 fill-athme-sky text-athme-sky shrink-0" /><span><strong>Venue relationships.</strong> You build the partnerships that keep events running week after week.</span></li>
              <li className="flex gap-3"><Circle className="h-2 w-2 mt-2 fill-athme-sky text-athme-sky shrink-0" /><span><strong>The launch weekend.</strong> Friday social, Saturday and Sunday sports — you set the tone.</span></li>
              <li className="flex gap-3"><Circle className="h-2 w-2 mt-2 fill-athme-sky text-athme-sky shrink-0" /><span><strong>Spotting and recruiting hosts.</strong> The community grows through the people you bring in.</span></li>
              <li className="flex gap-3"><Circle className="h-2 w-2 mt-2 fill-athme-sky text-athme-sky shrink-0" /><span><strong>Feedback loop with HQ.</strong> What you learn in week one shapes how athme grows everywhere.</span></li>
            </ul>

            <h3 className="font-display text-xl font-bold mt-10 mb-3">
              Read the city before you launch
            </h3>
            <p className="text-foreground/85 leading-relaxed mb-3">
              Before booking anything, spend a couple of weeks getting a real feel for the ground:
            </p>
            <ol className="space-y-3 text-foreground/85 list-decimal list-inside marker:text-athme-sky marker:font-bold">
              <li>Search Facebook for <em>“Internationals in [city]”</em>, <em>“Expats in [city]”</em>, ESN groups, and sport-specific groups.</li>
              <li>Read 2 to 3 weeks of posts. Are people asking to meet others or to play together?</li>
              <li>Map the venues you could use and check which ones are bookable.</li>
              <li>Confirm at least 4 to 5 different sports can run on a normal weekend.</li>
            </ol>

            <AarhusCallout>
              <p>
                Aarhus showed us the demand is already sitting in the
                Facebook groups. People are there, waiting for something
                to join. They don't need convincing, they need an
                opportunity. Your job is simply to offer it.
              </p>
            </AarhusCallout>
          </section>

          {/* 2 — Your opportunity */}
          <section id="city-manager" className="scroll-mt-8 mb-24">
            <SectionHeader
              number="02"
              eyebrow="Why this role matters"
              title="Your opportunity"
              lead="City manager isn't a side job. It's where the next leaders of athme are going to come from — and we want that to be you."
            />

            <div className="mt-6 rounded-3xl bg-gradient-brand p-1 shadow-brand">
              <div className="rounded-[calc(1.5rem-2px)] bg-card p-7 md:p-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <Star className="h-4 w-4" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-athme-sky">
                    A seat at the table
                  </p>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                  Build a city, build your future with athme.
                </h3>
                <p className="mt-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                  We genuinely believe that anyone who contributes and
                  generates superior results will always have a seat at
                  the table — as part of the core team building athme.
                  The city manager role is where that path begins.
                </p>
              </div>
            </div>

            <h3 className="font-display text-xl font-bold mt-10 mb-4">
              How you grow with athme
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: Rocket,
                  t: "Real ownership",
                  d: "You run a city. The decisions, the partners, the community — they carry your fingerprint from day one.",
                  tone: "from-athme-sky to-athme-cyan",
                },
                {
                  icon: TrendingUp,
                  t: "Performance-based rewards",
                  d: "The stronger your city performs, the bigger the upside. Superior results unlock superior rewards.",
                  tone: "from-athme-cyan to-athme-mint",
                },
                {
                  icon: Star,
                  t: "Path to the core team",
                  d: "City managers who consistently deliver become the people we build the next chapter of athme with.",
                  tone: "from-athme-mint to-athme-green",
                },
              ].map((m) => (
                <div
                  key={m.t}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.tone}`} />
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${m.tone} text-white shadow-soft`}>
                    <m.icon className="h-5 w-5" />
                  </span>
                  <h4 className="font-display font-bold text-lg mt-4">{m.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>

            <h3 className="font-display text-xl font-bold mt-10 mb-3">What we ask of you</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Sporty and visibly enjoy it",
                "Already connected locally",
                "Reliable and responsive",
                "Comfortable in front of a group",
                "Living in the city for 3+ months",
                "Energised by people",
              ].map((t) => (
                <div key={t} className="rounded-xl border border-border bg-card px-4 py-3 text-sm">
                  {t}
                </div>
              ))}
            </div>

            <AarhusCallout>
              <p>
                Aarhus worked because the city manager was secured{" "}
                <strong>before</strong> a launch date was picked. That
                one decision helped reach more people, gather local
                insights first-hand, and move faster from day one. You
                are that person now.
              </p>
            </AarhusCallout>
          </section>

          {/* 3 — Partnerships */}
          <section id="partnerships" className="scroll-mt-8 mb-24">
            <SectionHeader
              number="03"
              eyebrow="Build the rails first"
              title="Partnerships before launch"
              lead="We always try to lock in venue partnerships before launch. Pre-launch deals tend to be better priced for our community, the relationships go deeper, and venue owners become real allies rather than just suppliers."
            />

            <h3 className="font-display text-xl font-bold mt-6 mb-3">Who we approach</h3>
            <ul className="space-y-2 text-foreground/85">
              <li className="flex gap-3"><Handshake className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>Padel clubs</span></li>
              <li className="flex gap-3"><Handshake className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>Bouldering gyms</span></li>
              <li className="flex gap-3"><Handshake className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>Sports halls and municipal venues</span></li>
              <li className="flex gap-3"><Handshake className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>Run clubs and yoga studios</span></li>
            </ul>

            <AarhusCallout>
              <p>
                Partners talk to each other, even across cities. Padel
                Yard, our padel partner in Copenhagen, recommended us to
                Pakhus77, who is now our partner in Aarhus. One credible
                partner can open the door to the next city.
              </p>
            </AarhusCallout>
          </section>

          {/* 4 — Promotion */}
          <section id="promotion" className="scroll-mt-8 mb-24">
            <SectionHeader
              number="04"
              eyebrow="Earn attention, don't buy it"
              title="Promotion before launch"
              lead="Your first wave of users comes from the same Facebook groups, ESN networks and sport communities you used to read the city."
            />

            <h3 className="font-display text-xl font-bold mt-6 mb-3">Where to post</h3>
            <ul className="space-y-2 text-foreground/85">
              <li className="flex gap-3"><Megaphone className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>Internationals and expats in [city]</span></li>
              <li className="flex gap-3"><Megaphone className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>ESN [city] and exchange-student groups</span></li>
              <li className="flex gap-3"><Megaphone className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>Sport-specific groups (padel, bouldering, football, running)</span></li>
            </ul>

            <h3 className="font-display text-xl font-bold mt-10 mb-3">
              The post that worked in Aarhus
            </h3>
            <p className="text-foreground/85 leading-relaxed mb-5">
              Personal, honest, low-pressure. Posted by you directly
              into the international Facebook group. No logos, no
              pitch. Just an invitation.
            </p>
            <div className="rounded-2xl border border-border bg-card p-3 shadow-soft max-w-md mx-auto">
              <img
                src={fbPost}
                alt="Facebook post in the Aarhus Internationals group inviting people to athme's first sport sessions"
                className="w-full rounded-xl"
              />
              <p className="text-xs text-muted-foreground text-center mt-3 italic">
                Real post in “Aarhus Internationals” — drove our first
                wave of attendees.
              </p>
            </div>
          </section>

          {/* 5 — Launch weekend */}
          <section id="launch-weekend" className="scroll-mt-8 mb-24">
            <SectionHeader
              number="05"
              eyebrow="The moment that defines the city"
              title="The launch weekend"
              lead="Friday builds trust and curiosity. Saturday and Sunday turn it into community."
            />

            <div className="space-y-4 mt-8">
              {[
                {
                  day: "Friday",
                  title: "Social night",
                  icon: Beer,
                  tone: "from-athme-sky to-athme-cyan",
                  blocks: [
                    "Casual venue. A bar, café, or any spot where we can gather a good crowd and grab some drinks together.",
                    "You open with a short story: what athme is, why this city.",
                    "Drinks, mingling, music. No formal program after the intro.",
                    "Small giveaway or free first session.",
                    "Goal: awareness, trust, the seed of community.",
                  ],
                },
                {
                  day: "Saturday",
                  title: "Full sport day",
                  icon: Trophy,
                  tone: "from-athme-cyan to-athme-mint",
                  blocks: [
                    "Pack the day with sports. Lean on racket and small-court formats: badminton, pickleball, table tennis, padel.",
                    "Final mix depends on venue availability and what each partner offers.",
                    
                    "Spot the most active and engaged people. They are your future hosts.",
                    "City manager moves between venues, takes photos, collects feedback.",
                  ],
                },
                {
                  day: "Sunday",
                  title: "More sport + closing",
                  icon: Users,
                  tone: "from-athme-mint to-athme-green",
                  blocks: [
                    "Another full day of sport, this time leaning into ball sports: football, volleyball, basketball.",
                    "Keep spotting potential hosts. The strongest signals appear when people show up two days in a row.",
                    "End with a short closing speech from the city manager: thank you, what comes next, how to stay involved.",
                    "Remind everyone that future events will be posted soon and to keep an eye on athme.",
                  ],
                },
              ].map((d) => (
                <div key={d.day} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
                  <div className={`bg-gradient-to-r ${d.tone} text-white px-5 py-4 flex items-center gap-3`}>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 backdrop-blur">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">{d.day}</p>
                      <h4 className="font-display text-xl font-bold">{d.title}</h4>
                    </div>
                  </div>
                  <ul className="p-5 space-y-2 text-sm md:text-base text-foreground/85">
                    {d.blocks.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-athme-sky shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <AarhusCallout>
              <p>
                The Friday launch event is the most important moment of
                the weekend. It is where we build the first real
                connections, get to know the community face to face, and
                earn the trust that makes everything on Saturday and
                Sunday work.
              </p>
            </AarhusCallout>
          </section>

          {/* 6 — Hosts */}
          <section id="hosts" className="scroll-mt-8 mb-24">
            <SectionHeader
              number="06"
              eyebrow="Recruit on day one"
              title="Host recruitment during launch"
              lead="We spot hosts during the launch weekend itself, not after."
            />

            <h3 className="font-display text-xl font-bold mt-6 mb-3">What we look for</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: "Proactive", d: "Helps without being asked.", tone: "from-athme-sky to-athme-cyan", icon: "✦" },
                { t: "Reliable", d: "Shows up when they say they will.", tone: "from-athme-cyan to-athme-mint", icon: "◆" },
                { t: "Engaged", d: "Talks to people they don't know yet.", tone: "from-athme-mint to-athme-green", icon: "✺" },
                { t: "Sports-passionate", d: "Cares about the activity.", tone: "from-athme-green to-athme-mint", icon: "▲" },
                { t: "Available", d: "2 to 4 hours a week, consistently.", tone: "from-athme-mint to-athme-cyan", icon: "●" },
                { t: "Welcoming", d: "Makes new people feel safe quickly.", tone: "from-athme-cyan to-athme-sky", icon: "♥" },
              ].map((p) => (
                <div
                  key={p.t}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.tone}`} />
                  <div className={`absolute -right-6 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br ${p.tone} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity`} />
                  <div className="flex items-start gap-3 relative">
                    <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.tone} text-white font-bold shadow-soft`}>
                      {p.icon}
                    </span>
                    <div>
                      <p className="font-display font-bold text-base bg-gradient-to-r from-athme-sky to-athme-green bg-clip-text text-transparent">
                        {p.t}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{p.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-display text-xl font-bold mt-10 mb-3">How we approach them</h3>
            <ol className="space-y-3 text-foreground/85 list-decimal list-inside marker:text-athme-sky marker:font-bold">
              <li>City manager spots potential hosts during sessions.</li>
              <li>Talk to them right after the session about the role and the benefits.</li>
              <li>If they hesitate, tell them to take their time and follow up later.</li>
              <li>Once they accept, add them to the hosts WhatsApp group where you'll share updates.</li>
            </ol>

            <AarhusCallout>
              <p>
                All of our current hosts in Aarhus were spotted during
                the launch events and now run sessions on their own.
                Proof that we can recruit strong hosts from the very
                first events.
              </p>
            </AarhusCallout>
          </section>

          {/* 7 — Feedback */}
          <section id="feedback" className="scroll-mt-8 mb-24">
            <SectionHeader
              number="07"
              eyebrow="Listen with intent"
              title="Feedback & local insights"
              lead="Month one tells us whether the city behaves like Copenhagen, like Aarhus, or like something new."
            />

            <h3 className="font-display text-xl font-bold mt-6 mb-3">Ask every participant</h3>
            <ul className="space-y-2 text-foreground/85">
              <li className="flex gap-3"><MessageSquare className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>How did you find out about athme?</span></li>
              <li className="flex gap-3"><MessageSquare className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>What other sports would you like to try at our events?</span></li>
              <li className="flex gap-3"><MessageSquare className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>What did you enjoy or not enjoy during the events?</span></li>
              <li className="flex gap-3"><MessageSquare className="h-4 w-4 mt-1 text-athme-sky shrink-0" /><span>What would make you come to even more events?</span></li>
            </ul>

            <h3 className="font-display text-xl font-bold mt-10 mb-3">Signals to watch</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-athme-green/40 bg-gradient-soft p-5">
                <p className="font-display font-bold text-athme-green flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Long-term potential</p>
                <ul className="mt-2 space-y-1 text-sm text-foreground/85">
                  <li>· Returning faces in week 2 and 3</li>
                  <li>· Participants bringing friends unprompted</li>
                  <li>· Hosts asking to add their own events or coming up with suggestions</li>
                  <li>· Steady or growing fill rate week over week</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-display font-bold text-muted-foreground flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-athme-sky" /> Structural limits</p>
                <ul className="mt-2 space-y-1 text-sm text-foreground/85">
                  <li>· Same people coming every time</li>
                  <li>· Spots only fill with heavy effort and personal outreach</li>
                  <li>· Hosts disengaging after a few events</li>
                  <li>· Fill rate dropping week by week</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 8 — Stabilize */}
          <section id="stabilize" className="scroll-mt-8 mb-24">
            <SectionHeader
              number="08"
              eyebrow="Turn launch into routine"
              title="Stabilizing operations"
              lead="The first month after launch matters more than the launch itself. Momentum is fragile."
            />

            <div className="space-y-4 mt-6">
              {[
                {
                  w: "Week 1",
                  t: "Review & adapt",
                  p: "Debrief the launch with the city manager. Change what didn't work, double the slots/ events that did.",
                },
                {
                  w: "Week 2",
                  t: "Hold the cadence",
                  p: "Same time, same venues, same hosts. Predictability builds trust faster than novelty.",
                },
                {
                  w: "Week 3",
                  t: "Coach hosts",
                  p: "Create recurring meetings with the hosts. Discuss together what worked, what didn't, what they need for succesful events",
                },
                {
                  w: "Week 4",
                  t: "Protect quality",
                  p: "No need to overthink it or try too many things at once. Replicate what worked in the past and in other cities before experimenting with new ideas.",
                },
              ].map((r) => (
                <div key={r.w} className="flex gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="shrink-0 w-20">
                    <div className="font-display text-2xl font-extrabold text-gradient-brand">{r.w}</div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{r.t}</h4>
                    <p className="text-sm md:text-base text-muted-foreground mt-1 leading-relaxed">{r.p}</p>
                  </div>
                </div>
              ))}
            </div>

            <AarhusCallout title="What Aarhus taught us about month one">
              <p>
                Consistency is everything. Keep holding events on a steady cadence so people see that athme is here to stay and only getting bigger.
              </p>
            </AarhusCallout>
          </section>

          {/* Checklist */}
          <section id="checklist" className="scroll-mt-8 mb-24">
            <div className="rounded-3xl bg-gradient-brand p-1 shadow-brand">
              <div className="rounded-[calc(1.5rem-2px)] bg-card p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-athme-sky mb-2">
                  Before you launch
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Minimum requirements
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl">
                  If you can't tick every box, pause and re-evaluate the risks before moving forward.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {[
                    "Population 200,000+ with visible international / student community",
                    "City manager identified and committed",
                    "At least 1 venue partnership in place",
                    "Promo posted in ≥3 relevant Facebook groups",
                    "ESN or student-org partnership opened",
                    "Friday social venue booked",
                    "Launch weekend (Sat + Sun) sports booked",
                    "Backup venue identified for at least 1 sport",
                  ].map((c) => (
                    <CheckItem key={c}>{c}</CheckItem>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Risks */}
          <section id="risks" className="scroll-mt-8 mb-20">
            <SectionHeader
              number="!!"
              eyebrow="Read this before saying yes"
              title="Common risks when expanding too early"
              lead="Most failed expansions don't fail because the city was wrong. They fail because we moved before the foundations were in place."
            />

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                { t: "No real city manager", d: "Trying to run a city remotely from HQ. Hosts drift, venues stop replying." },
                { t: "Weak community signal", d: "City looks good on paper but has no demand visible in groups." },
                { t: "No venue availability", d: "Venues exist, but none have open slots to host weekend events." },
                { t: "Promo didn't land", d: "Posts in Facebook groups got little reach. No traction before launch." },
                { t: "Premature scaling", d: "Adding sports or a second city before the first is stable." },
                { t: "Skipping the Friday social", d: "Going straight into sport without the low-pressure social moment." },
                { t: "Hiring the wrong city manager", d: "Enthusiastic but unreliable. Cheaper up front, expensive after." },
                { t: "App not ready for the city", d: "If the app isn't adapted to the new city, it creates impediments from day one." },
              ].map((r) => (
                <div key={r.t} className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-athme-sky/50 transition">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-brand text-white">
                      <AlertTriangle className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-lg">{r.t}</h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{r.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ready to expand */}
          <section className="mt-20 mb-12">
            <div className="text-center mb-8">
              <h2 className="font-display font-black text-4xl md:text-6xl bg-gradient-brand bg-clip-text text-transparent leading-tight">
                Ready to expand?
              </h2>
              <p className="mt-3 text-muted-foreground text-base md:text-lg">
                The next city is waiting. Let's bring the athlete out in them too.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-soft border border-border">
              <img
                src={communityPhoto}
                alt="athme community across cities — volleyball, basketball, padel and pickleball groups"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border pt-8 mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={logoMark} alt="athme" className="h-14 w-auto" />
              <div>
                <p className="font-display font-bold text-sm">athme · Expansion Playbook</p>
                <p className="text-xs text-muted-foreground">v1.0 · Internal use only</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground italic">
              The Athlete in Me.
            </p>
          </footer>

          <div className="mt-10">
            <TrendingUp className="h-4 w-4 text-athme-sky inline-block mr-2" aria-hidden />
            <span className="text-xs text-muted-foreground">
              Update this playbook after every new city launch.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
