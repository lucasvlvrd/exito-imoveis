import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Êxito em Imóveis coleta, usa e protege dados pessoais, em conformidade com a LGPD.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <Reveal>
        <span className="text-xs tracking-[0.15em] text-muted-foreground">
          POLÍTICA DE PRIVACIDADE
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Privacidade e dados pessoais</h1>
        <p className="mt-4 text-xs text-muted-foreground">
          Última atualização: {new Date().toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-xl text-foreground">1. Quem é o controlador dos dados</h2>
          <p className="mt-2">
            Esta política se aplica ao site da {site.name} ({site.creci}), com
            sede em {site.address.full}. Para qualquer solicitação
            relacionada aos seus dados pessoais, entre em contato pelo
            e-mail <a href={`mailto:${site.email}`} className="underline underline-offset-2 hover:text-foreground">{site.email}</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground">2. Quais dados coletamos</h2>
          <p className="mt-2">
            Coletamos apenas os dados que você nos informa voluntariamente
            pelo formulário de contato do site: nome, e-mail, telefone e o
            conteúdo da sua mensagem. Não coletamos dados sensíveis.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground">3. Para que usamos seus dados</h2>
          <p className="mt-2">
            Usamos esses dados exclusivamente para responder sua solicitação
            de contato — dúvidas sobre imóveis, agendamento de visitas ou
            anúncio de um imóvel. Não vendemos nem compartilhamos seus dados
            com terceiros para fins de marketing.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground">4. Cookies</h2>
          <p className="mt-2">
            Utilizamos cookies para lembrar sua preferência de consentimento
            e, somente mediante seu aceite, para métricas de audiência
            (Google Analytics). Você pode alterar sua escolha a qualquer
            momento limpando os dados de navegação do seu navegador.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground">5. Por quanto tempo guardamos seus dados</h2>
          <p className="mt-2">
            Mantemos os dados do formulário de contato pelo tempo necessário
            para atender sua solicitação e cumprir obrigações legais
            aplicáveis, sendo descartados após esse período.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground">6. Seus direitos (LGPD)</h2>
          <p className="mt-2">
            Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
            você pode solicitar a confirmação da existência de tratamento,
            acesso, correção, anonimização, portabilidade ou eliminação dos
            seus dados, além de revogar o consentimento dado. Basta enviar
            sua solicitação para <a href={`mailto:${site.email}`} className="underline underline-offset-2 hover:text-foreground">{site.email}</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground">7. Segurança</h2>
          <p className="mt-2">
            Adotamos medidas técnicas e organizacionais razoáveis para
            proteger seus dados contra acesso não autorizado, perda ou uso
            indevido.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-foreground">8. Alterações desta política</h2>
          <p className="mt-2">
            Esta política pode ser atualizada periodicamente. A data da
            última atualização está sempre indicada no topo desta página.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
