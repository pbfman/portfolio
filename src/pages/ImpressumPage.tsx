import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ImpressumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-200 p-8 font-sans">
      <div className="max-w-2xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Zurück zum Chat
        </Link>
        
        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
          <h1 className="text-3xl font-bold mb-8">Impressum</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Patrick Brösamle<br />
                Blumenstr. 91<br />
                01307 Dresden
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                E-Mail: <a href="mailto:patrick@broesamle.dev" className="text-accent hover:underline">patrick@broesamle.dev</a><br />
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Patrick Brösamle<br />
                Blumenstr. 91<br />
                01307 Dresden
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Haftungsausschluss (Disclaimer)</h2>

              <h3 className="text-lg font-semibold mt-6 mb-2">Haftung für Inhalte</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Haftung für Links</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Urheberrecht</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
