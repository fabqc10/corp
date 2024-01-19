import Hero from '@/components/hero';
import performanceImg from "/public/performance.jpg";


const PerformancePage = () => {
  return (
    <Hero title="We serve high performance applications" imgData={performanceImg} imgAlt="welding"/>
  );
}

export default PerformancePage