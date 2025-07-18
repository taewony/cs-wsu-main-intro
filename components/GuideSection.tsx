'use client'

import PrimaryButton from "./PrimaryButton";

export default function GuideSection() {
  return (
    // <section className="w-full py-24 text-center bg-gradient-to-b from-white via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
    <section className="bg-zinc-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl font-bold text-gray-300 mb-6">
          학과 소개와 입학 안내는 홈페이지로 이동해 확인.
        </p>
        <PrimaryButton text="학과 공식 홈페이지" />
      </div>
    </section>
  )
}
