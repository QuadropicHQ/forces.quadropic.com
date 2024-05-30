import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import {
  BrushIcon,
  Clock10,
  DollarSignIcon,
  Handshake,
  Keyboard,
  Lock,
  Microscope,
  TimerIcon,
  TreeDeciduousIcon
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Quadropic Forces
        </Typography>
        <Typography className="max-w-2l" variant="h3">
          Best B2B Tech Solutions.
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Want Tech Enabled service for your business?
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          No Worries,We are one of the best B2B Tech
          Solutions provider in the current market. Backed
          by Quadropic, a Tech Startup who&aposve made
          Social Media apps like Hashes, AI apps like
          Syntheo and much others mastering in Design AI and
          other features.
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          If you want to get an App Website CMS or any other
          Software for your company or personal needs, We
          are the best choice in most of the aspects.
        </Typography>

        <Typography className="max-w-2xl" variant="h5">
          Give us a try and we&aposll prove it
        </Typography>
        <Link
          href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Let&aposs Schedule a Call`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/hero1.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Why Work with us?
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<DollarSignIcon size={24} />}
              headline="Reasonable Pricing"
              description="Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks"
            />
            <Feature
              icon={<BrushIcon size={24} />}
              headline="Best Design & UI/UX"
              description="Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system"
            />
            <Feature
              icon={<TimerIcon size={24} />}
              headline="Fast and Quick"
              description="We keep your data safe by taking top security measures."
            />
          </div>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Lock size={24} />}
              headline="Safe & Secure"
              description="Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks"
            />
            <Feature
              icon={<Handshake size={24} />}
              headline="Reliable & Trustworthy"
              description="Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system"
            />
            <Feature
              icon={<TreeDeciduousIcon size={24} />}
              headline="Carbon Nuetrality"
              description="We keep your data safe by taking top security measures."
            />
          </div>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Microscope size={24} />}
              headline="Minute Detailing"
              description="Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks"
            />
            <Feature
              icon={<Keyboard size={24} />}
              headline="AI  and other Features*"
              description="Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system"
            />
            <Feature
              icon={<Clock10 size={24} />}
              headline="Available Anytime*"
              description="We keep your data safe by taking top security measures."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Instant setup, no custom code
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Quadropic
          </Typography>
          <div>Power of the 24th Avenue</div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
