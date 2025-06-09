
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from 'lucide-react';

const pages = [
  "Hai Bianca",
  "Aku mau jujur sebenarnya...",
  `Aku kangen banget sama kamu. Aku nyariin letak rumahmu. Dan ketika web ini kamu baca berarti aku udah nyerah nyari :). Aku cuman pengen kita jadi temen lagi, trus juga sebenarnya ketika aku nemuin akunmu, kenangan-kenangan lama itu muncul. Lalu hal itu yang membuat aku buat ngechat atau ngedm kamu. Oh iya aku sebenarnya takut buat ngechat dan semua chattan yang aku kirim itu buatan ai :). Lucu ya? Atau aneh? Ya memang seperti itu adanya.`,
  `Yaudah, itu aja yang mau aku sampein. Oh iya kamu mau jadi temen ku lagi? Jawab di chat ya, yang jujur aja aku gak bakal ngapa-ngapain. Maaf ya aku ngeganggu kamu. Trima kasih udah jadi kisah di hidupku. I Love you ❤️`
];

export default function Convession() {
  const [page, setPage] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 p-4 relative">
      <audio autoPlay loop volume="0.2">
        <source src="https://cdn.pixabay.com/download/audio/2023/03/07/audio_d843443bae.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Card className="max-w-xl w-full p-6 shadow-xl bg-white rounded-2xl">
        <CardContent className="text-center space-y-6">
          <p className="text-xl font-semibold text-gray-700 leading-relaxed">
            {pages[page]}
          </p>
          {page < pages.length - 1 ? (
            <Button
              onClick={() => setPage(page + 1)}
              className="bg-pink-500 text-white hover:bg-pink-600 rounded-full px-6 py-2 text-base"
            >
              Lanjut
            </Button>
          ) : (
            <Heart className="mx-auto text-pink-500 w-10 h-10 animate-pulse" />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
