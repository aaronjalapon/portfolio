export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-black/10 border-t-black dark:border-white/20 dark:border-t-white rounded-full animate-spin" />
    </div>
  )
}
