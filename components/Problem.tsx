export default function Problem() {
  const problems = [
    "Posting on Facebook and Instagram but not getting enough inquiries",
    "Boosting posts but not seeing real sales",
    "Not knowing what marketing strategy to use",
    "Getting random leads but not serious customers",
    "Depending only on referrals or word of mouth",
    "Feeling confused about ads, content, landing pages, and follow-up"
  ];

  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
              What is going wrong?
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-5xl">
              You do not need random marketing. You need a clear lead system.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              If you are a business owner in Nepal and your marketing feels
              confusing, this call is made for you. I will understand your
              business, find what is not working, and show you a simple plan you
              can start using immediately.
            </p>
          </div>
          <div className="rounded-md border border-gold-100 bg-white p-5 shadow-soft sm:p-7">
            <div className="grid gap-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="rounded-md border border-gold-100 bg-[#fffaf0] px-4 py-3 text-sm font-medium leading-6 text-zinc-700"
                >
                  {problem}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-md bg-ink px-5 py-4 text-sm font-semibold leading-6 text-white">
              In the free consultation, you will get a practical Meta Ads and
              digital marketing plan focused on better leads, daily inquiries,
              and more serious customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
