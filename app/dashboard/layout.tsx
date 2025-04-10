import SideNav from "@/app/ui/dashboard/sidenav"; // レイアウトのコンポーネントをインポート

// children propsを受け取る。
// childrenは、レイアウト内に表示されるコンテンツ(ページや他のコンポーネント)
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
