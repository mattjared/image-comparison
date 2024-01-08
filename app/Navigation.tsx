"use client";
import { GeistMono } from 'geist/font/mono';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigationData = [
  {
    text: "Home",
    route: "/"
  },
  {
    text: "Next Image",
    route: "/next-image"
  },
  {
    text: "Image Tag",
    route: "/image-tag"
  },
]

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  console.log(pathname);
  return (
    <div>
      <div className="px-4 py-2 grid grid-cols-3 text-center gap-8">
        {navigationData.map(el => (
          <Link key={el.route} href={el.route} className={el.route === pathname ? 'font-bold border-b-4 border-indigo-500 py-2' : 'py-2'}>{el.text}</Link>
        ))}
      </div>
      <div className="px-4 py-2">
        <h3 onClick={() => setIsOpen(!isOpen)}><span>{isOpen ? '▼': '▶'}</span> How to use this site</h3>
        {isOpen && (
          <div>
            <p className="py-4">The pages below are split into two buckets the left using Next Image and right using web image tags. To see the difference in how they work and will perform we can do the following...</p>
            <ol>
              <li className="font-bold">1. Page Speed Insights.</li>
              <p>For both mobile and desktop Next Image is in the green. Native image tags are in the red for performance</p>
              <ol>
                <li><Link href="https://pagespeed.web.dev/analysis/https-image-comparison-vercel-app-next-image/0u4d1wakd2?form_factor=mobile" target="_blank" className="text-indigo-500">Next Image</Link></li>
                <li><Link href="https://pagespeed.web.dev/analysis/https-image-comparison-vercel-app-image-tag/mm7u1wah3s?form_factor=mobile" target="_blank" className="text-indigo-500">Image Tags</Link></li>
              </ol>
              <li className="mt-4 font-bold">2. Page Size.</li>
              <p>Go to one or both pages to test. Open your browser&apos;s dev tools and go to the Network Tab. When in the network tab clear all that was loaded and reload the page.</p>
              <ol>
                <li><Link href="/next-image" className="text-indigo-500">Next Image:</Link> On the Next Image page filter<span className="font-bold">chicago</span> to only show the images that were loaded or only show img. See only ~8mb of images were loaded. Next Image automatically lazy loads images AND compresses and optimizes the images.</li>
                <li><Link href="/image-tag" className="text-indigo-500">Image:</Link> On the Image Tag page filter <span className="font-bold">liverpool</span> to only show the images that were loaded or only show img. See ~46mb of images were loaded. Using only the image tag is a render blocking action that loads ALL the images on the initial request, it does not compress or optimize the images and blocks all other rendering from occuring.</li>
              </ol>
            </ol>
          </div>
        )}
      </div>
    </div>
  )
}



