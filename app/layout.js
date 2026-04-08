import "./globals.css";
import SiteShell from "../components/SiteShell";

export const metadata = {
  title: "رشاد البازلي | موقع شخصي فاخر",
  description: "موقع شخصي فاخر متعدد الصفحات مع خلفية سينمائية ونموذج تواصل وقاعدة بيانات.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
