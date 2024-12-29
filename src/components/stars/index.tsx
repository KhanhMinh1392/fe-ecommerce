import { Star } from 'lucide-react';

interface StarsProps {
  size?: number;
}

export default function Stars(props: StarsProps) {
  const { size = 20 } = props;
  return (
    <div className="my-4 flex items-center gap-0.5">
      <Star color="#FFC633" fill="#FFC633" size={size} />
      <Star color="#FFC633" fill="#FFC633" size={size} />
      <Star color="#FFC633" fill="#FFC633" size={size} />
      <Star color="#FFC633" fill="#FFC633" size={size} />
      <Star color="#FFC633" fill="#FFC633" size={size} />
    </div>
  );
}
