export default function PrimaryButton({ text }: { text: string }) {
  return (
    <a href="https://taewony.github.io/wsu-cs-homepage/">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
        {text}
      </button>
    </a>
  );
}
