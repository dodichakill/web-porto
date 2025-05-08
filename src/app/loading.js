import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.90)', // sedikit transparan agar transisi smooth
      zIndex: 50
    }}>
      <Spinner />
    </div>
  );
}
