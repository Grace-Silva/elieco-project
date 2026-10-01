import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  Facebook,
  Filter,
  Heart,
  Instagram,
  Leaf,
  Menu,
  Minus,
  Monitor,
  Package,
  Plus,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Trash2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScreenId =
  | "inicio"
  | "tienda"
  | "producto"
  | "acceso"
  | "carrito"
  | "confirmar"
  | "personaliza"
  | "experiencia"
  | "historia"
  | "sostenibilidad"
  | "contacto"
  | "cuenta"
  | "legales";

const screens: Array<{ id: ScreenId; label: string; group: string }> = [
  { id: "inicio", label: "Inicio", group: "Descubrimiento" },
  { id: "tienda", label: "Tienda / catálogo", group: "Compra" },
  { id: "producto", label: "Detalle de producto", group: "Compra" },
  { id: "acceso", label: "Acceso requerido", group: "Compra" },
  { id: "carrito", label: "Carrito guardado", group: "Compra" },
  { id: "confirmar", label: "Confirmar por WhatsApp", group: "Compra" },
  { id: "personaliza", label: "Personaliza", group: "Servicios" },
  { id: "experiencia", label: "Experiencia Elieco", group: "Servicios" },
  { id: "historia", label: "Nuestra historia", group: "Marca" },
  { id: "sostenibilidad", label: "Sostenibilidad", group: "Marca" },
  { id: "contacto", label: "Contacto y FAQ", group: "Ayuda" },
  { id: "cuenta", label: "Mi cuenta", group: "Cuenta" },
  { id: "legales", label: "Información y políticas", group: "Ayuda" },
];

const productNames = ["Blusa Raíz", "Falda Savia", "Pantalón Brote", "Short Horizonte"];

function Placeholder({ className, label = "Imagen" }: { className?: string; label?: string }) {
  return (
    <div className={cn("wire-placeholder flex items-center justify-center", className)}>
      <span>{label}</span>
    </div>
  );
}

function Field({ label, wide, placeholder = "Escribe aquí" }: { label: string; wide?: boolean; placeholder?: string }) {
  return (
    <label className={cn("block", wide && "md:col-span-2")}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest">{label}</span>
      <div className="flex h-11 items-center border border-border bg-background px-3 text-sm text-muted-foreground">{placeholder}</div>
    </label>
  );
}

function ProductCard({ name, onOpen }: { name: string; onOpen: () => void }) {
  return (
    <button className="group text-left" onClick={onOpen}>
      <Placeholder className="aspect-[4/5] w-full" label="Foto de prenda" />
      <div className="flex items-start justify-between gap-3 py-3">
        <div>
          <p className="font-display text-lg">{name}</p>
          <p className="mt-1 text-xs text-muted-foreground">Material sostenible · 3 colores</p>
        </div>
        <p className="whitespace-nowrap text-sm font-semibold">$189.000</p>
      </div>
    </button>
  );
}

function Home({ go }: { go: (screen: ScreenId) => void }) {
  return (
    <>
      <section className="grid min-h-[530px] grid-cols-1 border-b border-border lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16">
          <p className="eyebrow">Colección consciente 2026</p>
          <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[1.05] md:text-7xl">Moda que inspira, naturaleza que respira.</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">Prendas exclusivas creadas con materiales sostenibles, procesos responsables y propósito.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => go("tienda")}>Descubre la tienda <ArrowRight size={15} /></Button>
            <Button variant="outline" onClick={() => go("sostenibilidad")}>Conoce el impacto</Button>
          </div>
        </div>
        <Placeholder className="min-h-[380px] border-y-0 border-r-0" label="Fotografía principal de campaña" />
      </section>

      <section className="border-b border-border px-6 py-14 md:px-12 lg:px-16">
        <div className="mb-8 flex items-end justify-between">
          <div><p className="eyebrow">Tienda</p><h2 className="section-title">Elige tu prenda</h2></div>
          <Button variant="ghost" onClick={() => go("tienda")}>Ver todo <ArrowRight size={15} /></Button>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{productNames.map((name) => <ProductCard key={name} name={name} onOpen={() => go("producto")} />)}</div>
      </section>

      <section className="grid grid-cols-1 border-b border-border lg:grid-cols-2">
        <Placeholder className="min-h-[380px] border-0 border-r" label="Proceso de confección" />
        <div className="flex flex-col justify-center px-6 py-14 md:px-12 lg:px-16">
          <Leaf className="mb-5" />
          <p className="eyebrow">Sostenibilidad verificable</p>
          <h2 className="section-title">Cada prenda cuenta una historia de transformación.</h2>
          <p className="mt-5 max-w-xl leading-7 text-muted-foreground">Conoce el origen de los materiales, el proceso de elaboración y el impacto ambiental de lo que eliges vestir.</p>
          <Button className="mt-7 self-start" variant="outline" onClick={() => go("sostenibilidad")}>Explorar el proceso</Button>
        </div>
      </section>

      <section className="grid gap-5 bg-muted px-6 py-14 md:grid-cols-3 md:px-12 lg:px-16">
        <div className="md:col-span-2"><p className="eyebrow">Experiencia Elieco</p><h2 className="section-title">Más cerca de nuestra comunidad.</h2></div>
        <div className="space-y-3 text-sm"><p>○ Beneficios para clientes frecuentes</p><p>○ Concursos y lanzamientos</p><p>○ Descuentos exclusivos</p><Button className="mt-3" onClick={() => go("experiencia")}>Quiero participar</Button></div>
      </section>
    </>
  );
}

function Shop({ go }: { go: (screen: ScreenId) => void }) {
  return (
    <div className="page-pad">
      <p className="eyebrow">Tienda</p><h1 className="page-title">Prendas con propósito</h1>
      <div className="mt-8 flex flex-col gap-3 border-y border-border py-4 md:flex-row md:items-center">
        <div className="flex h-10 flex-1 items-center gap-2 border border-border px-3"><Search size={16} /><span className="text-sm text-muted-foreground">Buscar prendas</span></div>
        <Button variant="outline"><Filter size={15} /> Filtros</Button><Button variant="outline">Ordenar <ChevronDown size={15} /></Button>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[210px_1fr]">
        <aside className="hidden space-y-7 border-r border-border pr-6 lg:block">
          {[["Categoría", "Blusas", "Faldas", "Pantalones", "Shorts"], ["Talla", "XS", "S", "M", "L"], ["Material", "Fibras recuperadas", "PET reciclado", "Biodegradable"]].map(([title, ...items]) => <div key={title}><p className="mb-3 text-xs font-bold uppercase tracking-widest">{title}</p>{items.map(i => <label className="mb-2 flex gap-2 text-sm" key={i}><span className="size-4 border border-border" />{i}</label>)}</div>)}
        </aside>
        <div><div className="mb-5 flex justify-between text-sm"><span>400 productos</span><span className="text-muted-foreground">Página 1 de 50</span></div><div className="grid grid-cols-2 gap-4 xl:grid-cols-3">{[...productNames, "Vestido Lluvia", "Blusa Semilla"].map(name => <ProductCard key={name} name={name} onOpen={() => go("producto")} />)}</div><div className="mt-10 flex justify-center gap-2"><Button variant="outline" size="icon"><ArrowLeft size={15}/></Button><Button>1</Button><Button variant="outline">2</Button><Button variant="outline">3</Button><Button variant="outline" size="icon"><ArrowRight size={15}/></Button></div></div>
      </div>
    </div>
  );
}

function Product({ go }: { go: (screen: ScreenId) => void }) {
  const [size, setSize] = useState("M");
  return (
    <div className="page-pad">
      <button className="mb-6 flex items-center gap-2 text-sm" onClick={() => go("tienda")}><ArrowLeft size={15}/> Volver a tienda</button>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div className="grid grid-cols-2 gap-3"><Placeholder className="col-span-2 aspect-[4/3]" label="Foto principal"/><Placeholder className="aspect-square"/><Placeholder className="aspect-square"/></div>
        <div><p className="eyebrow">Colección Raíces</p><h1 className="page-title">Blusa Raíz</h1><p className="mt-4 text-xl font-semibold">$189.000 COP</p><p className="mt-6 leading-7 text-muted-foreground">Diseño de edición limitada confeccionado con fibras recuperadas. Precio con impuestos incluidos.</p>
          <div className="mt-7"><p className="control-label">Talla</p><div className="flex gap-2">{["XS","S","M","L"].map(v => <Button key={v} variant={size===v?"primary":"outline"} size="icon" onClick={() => setSize(v)}>{v}</Button>)}</div></div>
          <div className="mt-6"><p className="control-label">Color</p><div className="flex gap-2"><span className="size-8 rounded-full border-4 border-background bg-primary ring-1 ring-ring"/><span className="size-8 rounded-full border bg-secondary"/><span className="size-8 rounded-full border bg-foreground"/></div></div>
          <Button className="mt-8 w-full" onClick={() => go("acceso")}><ShoppingBag size={16}/> Agregar al carrito</Button>
          <div className="mt-7 divide-y divide-border border-y border-border text-sm">{["Materiales y composición", "Impacto ambiental", "Cuidados de la prenda", "Envíos y cambios"].map(i => <div className="flex justify-between py-4" key={i}><span>{i}</span><Plus size={16}/></div>)}</div>
        </div>
      </div>
    </div>
  );
}

function Login({ go }: { go: (screen: ScreenId) => void }) {
  return <div className="mx-auto max-w-lg page-pad"><div className="mb-8 text-center"><CircleUserRound className="mx-auto mb-4" size={36}/><p className="eyebrow">Carrito protegido</p><h1 className="page-title">Accede para guardar tu selección</h1><p className="mt-3 text-sm text-muted-foreground">Tu carrito quedará asociado a tu cuenta para que puedas retomarlo después.</p></div><div className="space-y-4"><Field label="Correo electrónico" placeholder="nombre@correo.com"/><Field label="Contraseña" placeholder="••••••••"/><Button className="w-full" onClick={() => go("carrito")}>Iniciar sesión y continuar</Button><Button className="w-full" variant="outline" onClick={() => go("carrito")}>Crear una cuenta</Button></div><p className="mt-6 text-center text-xs text-muted-foreground">Wireframe: acceso simulado para validar el recorrido.</p></div>;
}

function Cart({ go }: { go: (screen: ScreenId) => void }) {
  return <div className="page-pad"><p className="eyebrow">Tu selección guardada</p><h1 className="page-title">Carrito</h1><div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]"><div className="divide-y divide-border border-y border-border">{["Blusa Raíz", "Falda Savia"].map((name,i)=><div className="grid grid-cols-[90px_1fr_auto] gap-4 py-5" key={name}><Placeholder className="aspect-square" label="Foto"/><div><h2 className="font-display text-xl">{name}</h2><p className="mt-1 text-xs text-muted-foreground">Talla {i ? "S" : "M"} · Verde bosque</p><div className="mt-4 flex w-fit items-center border border-border"><Button variant="ghost" size="icon"><Minus size={13}/></Button><span className="px-2 text-sm">1</span><Button variant="ghost" size="icon"><Plus size={13}/></Button></div></div><div className="flex flex-col items-end justify-between"><button aria-label="Eliminar"><Trash2 size={16}/></button><b>$189.000</b></div></div>)}</div><aside className="h-fit border border-border p-6"><h2 className="font-display text-2xl">Resumen</h2><div className="mt-5 space-y-3 text-sm"><p className="flex justify-between"><span>Subtotal</span><b>$378.000</b></p><p className="flex justify-between"><span>Envío</span><b>Gratis</b></p></div><div className="my-5 border-t border-border"/><p className="flex justify-between"><span>Total estimado</span><b>$378.000 COP</b></p><div className="mt-5 bg-muted p-3 text-xs"><Check className="mr-2 inline" size={14}/>Superaste $200.000: envío nacional gratis.</div><Button className="mt-5 w-full" onClick={() => go("confirmar")}>Confirmar pedido <ArrowRight size={15}/></Button><p className="mt-3 text-center text-xs text-muted-foreground">No se realizará ningún pago en línea.</p></aside></div></div>;
}

function Confirm({ go }: { go: (screen: ScreenId) => void }) {
  const [sent, setSent] = useState(false);
  return <div className="page-pad"><button className="mb-6 flex items-center gap-2 text-sm" onClick={() => go("carrito")}><ArrowLeft size={15}/> Volver al carrito</button><div className="mx-auto max-w-3xl"><p className="eyebrow">Último paso</p><h1 className="page-title">Confirma los datos del pedido</h1><div className="mt-8 grid gap-4 md:grid-cols-2"><Field label="Nombre completo"/><Field label="Ciudad"/><Field label="Dirección de entrega" wide/><Field label="Notas para la tienda" wide placeholder="Indicaciones opcionales"/></div><div className="mt-7 border border-border p-5"><h2 className="font-display text-xl">Mensaje prellenado</h2><p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">Hola Elieco, quiero confirmar mi pedido:&#10;• Blusa Raíz — Talla M — $189.000&#10;• Falda Savia — Talla S — $189.000&#10;Total estimado: $378.000 COP&#10;Ciudad y dirección: [datos del formulario]</p></div><label className="mt-5 flex gap-3 text-sm"><span className="mt-0.5 size-4 border border-border"/>Acepto los términos, condiciones y política de privacidad.</label>{sent ? <div className="mt-6 border border-primary bg-accent p-5 text-sm"><Check className="mr-2 inline"/>Simulación completada: WhatsApp Business se abrirá con este mensaje.</div> : <Button className="mt-6 w-full" onClick={() => setSent(true)}>Enviar pedido a WhatsApp Business <ArrowRight size={15}/></Button>}</div></div>;
}

function Personalize() {
  return <div className="page-pad"><div className="max-w-3xl"><p className="eyebrow">Diseñado contigo</p><h1 className="page-title">Personaliza tu prenda</h1><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Cuéntanos tu idea. Prepararemos una cotización y continuaremos la conversación por WhatsApp.</p><div className="mt-6 border-l-2 border-primary bg-muted p-4 text-sm"><b>Anticipo:</b> 50% una vez aprobada la cotización. Tiempo estimado: 5–10 días hábiles.</div><div className="mt-8 grid gap-5 md:grid-cols-2"><Field label="Tipo de prenda" placeholder="Selecciona una opción"/><Field label="Talla" placeholder="Selecciona tu talla"/><Field label="Color o combinación"/><Field label="Material preferido"/><Field label="Diseño y acabados" wide/><Field label="Fecha requerida" placeholder="DD / MM / AAAA"/><Field label="Adjuntar referencia" placeholder="Seleccionar archivo"/></div><Button className="mt-7">Solicitar cotización por WhatsApp <ArrowRight size={15}/></Button></div></div>;
}

function Experience() {
  return <div><section className="grid border-b border-border lg:grid-cols-2"><div className="page-pad"><p className="eyebrow">Experiencia Elieco</p><h1 className="page-title">Una comunidad que viste el cambio.</h1><p className="mt-5 max-w-xl leading-7 text-muted-foreground">Reconocemos a quienes eligen prendas duraderas, comparten nuestro propósito y ayudan a que nuevas semillas crezcan.</p><Button className="mt-7">Únete al programa</Button></div><Placeholder className="min-h-[390px] border-y-0 border-r-0" label="Comunidad Elieco"/></section><section className="page-pad"><div className="grid gap-4 md:grid-cols-3">{[[Star,"Fidelización","Beneficios para clientes frecuentes y premio a la primera semilla con fruto."],[Sparkles,"Concursos","Activaciones y lanzamientos para acercarnos a la comunidad."],[Heart,"Descuentos","Ofertas de lanzamiento, combos y beneficios exclusivos."]].map(([Icon,t,d])=>{const I=Icon as typeof Star; return <article className="border border-border p-6" key={String(t)}><I/><h2 className="mt-5 font-display text-2xl">{String(t)}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(d)}</p></article>})}</div><div className="mt-12 grid gap-8 border-t border-border pt-10 lg:grid-cols-2"><div><p className="eyebrow">Empresas y eventos</p><h2 className="section-title">Agenda una conversación</h2><p className="mt-4 text-muted-foreground">Uniformes, detalles para eventos y pedidos especiales.</p></div><div className="grid gap-4"><Field label="Empresa o proyecto"/><Field label="Fecha preferida" placeholder="Seleccionar fecha"/><Button><CalendarDays size={15}/> Solicitar reunión</Button></div></div></section></div>;
}

function Story() {
  return <div><section className="page-pad text-center"><p className="eyebrow">Nuestra historia</p><h1 className="mx-auto max-w-4xl page-title">Elieco transforma la moda en una experiencia con propósito.</h1></section><Placeholder className="mx-6 aspect-[16/6] md:mx-12 lg:mx-16" label="Taller, creadora y proceso"/><section className="page-pad grid gap-8 md:grid-cols-3"><div><span className="step">01</span><h2 className="font-display text-2xl">La intención</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Vestir con elegancia sin renunciar al cuidado del planeta.</p></div><div><span className="step">02</span><h2 className="font-display text-2xl">La materia</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Fibras recuperadas, hilos biodegradables y materiales con trazabilidad.</p></div><div><span className="step">03</span><h2 className="font-display text-2xl">La transformación</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Prendas exclusivas, empaques biodegradables y etiquetas que pueden germinar.</p></div></section></div>;
}

function Sustainability() {
  return <div className="page-pad"><p className="eyebrow">Sostenibilidad</p><h1 className="max-w-3xl page-title">Del material a la semilla: conoce el impacto de tu prenda.</h1><div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">{[["01","Materiales","Fibras provenientes de retales, PET y componentes biodegradables."],["02","Confección","Procesos responsables y producción enfocada en calidad y duración."],["03","Empaque","Protección biodegradable, sin elementos plásticos innecesarios."],["04","Etiqueta viva","Instrucciones para sembrar la etiqueta con semillas después de usarla."]].map(([n,t,d])=><article className="bg-background p-7" key={n}><span className="step">{n}</span><h2 className="font-display text-2xl">{t}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{d}</p></article>)}</div><div className="mt-10 grid gap-6 border border-border p-6 md:grid-cols-[180px_1fr]"><Placeholder className="aspect-square" label="Ficha"/><div><p className="eyebrow">Impacto por producto</p><h2 className="font-display text-2xl">Ficha visible en cada prenda</h2><p className="mt-3 text-sm text-muted-foreground">Materiales · origen · proceso · cuidados · empaque · fin de vida</p><div className="mt-5 h-3 w-full bg-muted"><div className="h-full w-3/4 bg-primary"/></div></div></div></div>;
}

function Contact() {
  return <div className="page-pad"><div className="grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">Estamos cerca</p><h1 className="page-title">Contacto</h1><p className="mt-4 leading-7 text-muted-foreground">Escríbenos para resolver dudas sobre prendas, pedidos o personalizaciones.</p><div className="mt-7 space-y-3 text-sm"><p><b>WhatsApp Business:</b> +57 300 520 0883</p><p><b>Correo y horario:</b> Pendientes de confirmar</p><p><b>Redes:</b> Instagram · Facebook</p></div></div><div className="grid gap-4"><Field label="Nombre"/><Field label="Correo"/><Field label="Mensaje" placeholder="¿Cómo podemos ayudarte?"/><Button>Enviar consulta</Button></div></div><div className="mt-14 border-t border-border pt-10"><p className="eyebrow">Preguntas frecuentes</p><h2 className="section-title">Antes de escribirnos</h2><div className="mt-6 divide-y divide-border border-y border-border">{["¿Qué hace diferente a Elieco?","¿De qué materiales están elaboradas las prendas?","¿Puedo solicitar una prenda personalizada?","¿Cuánto cuesta y cuánto tarda el envío?","¿Qué hago con la etiqueta de semillas?"].map(q=><div className="flex justify-between gap-4 py-5" key={q}><span>{q}</span><Plus size={17}/></div>)}</div></div></div>;
}

function Account({ go }: { go: (screen: ScreenId) => void }) {
  return <div className="page-pad"><p className="eyebrow">Cuenta de cliente</p><h1 className="page-title">Hola, Ana</h1><div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]"><aside className="space-y-2 border-r border-border pr-5 text-sm"><p className="bg-muted p-3 font-semibold">Resumen</p><p className="p-3">Datos personales</p><button onClick={()=>go("carrito")} className="w-full p-3 text-left">Carrito guardado</button><p className="p-3">Cerrar sesión</p></aside><div><div className="grid gap-4 md:grid-cols-3">{[[Package,"0","Pedidos confirmados"],[ShoppingBag,"2","Productos guardados"],[Star,"120","Puntos estimados"]].map(([Icon,n,l])=>{const I=Icon as typeof Star; return <div className="border border-border p-5" key={String(l)}><I size={18}/><b className="mt-4 block font-display text-3xl">{String(n)}</b><span className="text-xs text-muted-foreground">{String(l)}</span></div>})}</div><div className="mt-8 border border-border p-6"><h2 className="font-display text-2xl">Programa de fidelización</h2><p className="mt-2 text-sm text-muted-foreground">Las reglas definitivas de puntos y recompensas están pendientes de confirmar.</p><div className="mt-5 h-2 bg-muted"><div className="h-full w-2/5 bg-primary"/></div></div></div></div></div>;
}

function Policies() {
  return <div className="page-pad"><p className="eyebrow">Información de servicio</p><h1 className="page-title">Políticas y condiciones</h1><div className="mt-9 grid gap-4 md:grid-cols-2">{[["Envíos","Gratis desde $200.000. Bogotá: 1–3 días después del despacho. Otras ciudades: 3–5 días."],["Cambios y devoluciones","Dentro de 5 días hábiles, con la prenda sin uso y sus etiquetas. Aplican excepciones para personalizados."],["Garantías","Cobertura por defectos de fabricación, sujeta a evaluación y evidencia fotográfica."],["Privacidad y datos","Responsable y textos legales pendientes de validación antes de publicar."],["Términos de compra","La solicitud se confirma con Elieco por WhatsApp; no hay pasarela de pago en esta versión."],["Cookies","Política y preferencias pendientes de definición."]].map(([t,d])=><article className="border border-border p-6" key={t}><h2 className="font-display text-2xl">{t}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{d}</p><Button className="mt-4" variant="ghost">Ver detalle <ArrowRight size={14}/></Button></article>)}</div></div>;
}

function Screen({ id, go }: { id: ScreenId; go: (screen: ScreenId) => void }) {
  const map: Record<ScreenId, ReactNode> = { inicio:<Home go={go}/>, tienda:<Shop go={go}/>, producto:<Product go={go}/>, acceso:<Login go={go}/>, carrito:<Cart go={go}/>, confirmar:<Confirm go={go}/>, personaliza:<Personalize/>, experiencia:<Experience/>, historia:<Story/>, sostenibilidad:<Sustainability/>, contacto:<Contact/>, cuenta:<Account go={go}/>, legales:<Policies/> };
  return map[id];
}

function StoreHeader({ go, mobile }: { go: (screen: ScreenId) => void; mobile: boolean }) {
  return <><div className="bg-primary px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">Envío nacional gratis desde $200.000</div><header className="flex h-16 items-center justify-between border-b border-border bg-background px-4 lg:px-8">{mobile ? <Button variant="ghost" size="icon"><Menu size={19}/></Button> : <nav className="flex gap-5 text-[11px] font-semibold uppercase tracking-widest"><button onClick={()=>go("tienda")}>Tienda</button><button onClick={()=>go("historia")}>Historia</button><button onClick={()=>go("sostenibilidad")}>Sostenibilidad</button></nav>}<button onClick={()=>go("inicio")} className="font-display text-2xl font-semibold">ELIECO</button><div className="flex"><Button variant="ghost" size="icon"><Search size={18}/></Button><Button variant="ghost" size="icon" onClick={()=>go("cuenta")}><CircleUserRound size={18}/></Button><Button variant="ghost" size="icon" onClick={()=>go("acceso")}><ShoppingBag size={18}/></Button></div></header></>;
}

function SocialRail() {
  return <div className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 flex-col border border-r-0 border-border bg-background"><a className="p-3" href="https://www.instagram.com/elieco26" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16}/></a><a className="border-t border-border p-3" href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={16}/></a></div>;
}

function Footer({ go }: { go: (screen: ScreenId) => void }) {
  return <footer className="border-t border-border bg-foreground px-6 py-10 text-background"><div className="grid gap-8 md:grid-cols-3"><div><p className="font-display text-2xl">ELIECO</p><p className="mt-2 text-xs opacity-70">Moda que inspira, naturaleza que respira.</p></div><div className="grid grid-cols-2 gap-3 text-xs"><button className="text-left" onClick={()=>go("contacto")}>Contacto y FAQ</button><button className="text-left" onClick={()=>go("legales")}>Envíos y cambios</button><button className="text-left" onClick={()=>go("personaliza")}>Personaliza</button><button className="text-left" onClick={()=>go("experiencia")}>Experiencia</button></div><div className="text-xs"><p className="font-semibold uppercase tracking-widest">Redes siempre visibles</p><p className="mt-3 opacity-70">Instagram · Facebook</p></div></div></footer>;
}

export function WireframeApp() {
  const [screen, setScreen] = useState<ScreenId>("inicio");
  const [device, setDevice] = useState<"desktop"|"mobile">("desktop");
  const [panel, setPanel] = useState(true);
  const current = screens.find(s => s.id === screen);
  return <div className="min-h-screen bg-workspace text-foreground"><div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border bg-background px-4"><div className="flex items-center gap-3"><Button variant="ghost" size="icon" onClick={()=>setPanel(v=>!v)}>{panel?<X size={18}/>:<Menu size={18}/>}</Button><div><b className="block text-sm">Wireframes Elieco</b><span className="hidden text-[10px] uppercase tracking-widest text-muted-foreground sm:block">Prototipo de baja fidelidad</span></div></div><div className="flex items-center gap-2"><div className="flex border border-border p-1"><Button size="sm" variant={device==="desktop"?"primary":"ghost"} onClick={()=>setDevice("desktop")} aria-label="Vista de escritorio"><Monitor size={15}/><span className="hidden sm:inline">Escritorio</span></Button><Button size="sm" variant={device==="mobile"?"primary":"ghost"} onClick={()=>setDevice("mobile")} aria-label="Vista móvil"><Smartphone size={15}/><span className="hidden sm:inline">Móvil</span></Button></div><span className="hidden text-xs text-muted-foreground md:inline">{current?.label}</span></div></div><div className="flex min-h-[calc(100vh-3.5rem)]">{panel&&<aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border bg-background p-4"><p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Pantallas · {screens.length}</p>{[...new Set(screens.map(s=>s.group))].map(group=><div className="mb-5" key={group}><p className="mb-1 px-2 text-[10px] uppercase tracking-widest text-muted-foreground">{group}</p>{screens.filter(s=>s.group===group).map((s,i)=><button key={s.id} onClick={()=>setScreen(s.id)} className={cn("mb-1 flex w-full items-center gap-2 rounded-sm px-2 py-2 text-left text-xs",screen===s.id?"bg-primary text-primary-foreground":"hover:bg-muted")}><span className="w-4 text-[9px] opacity-60">{String(screens.indexOf(s)+1).padStart(2,"0")}</span>{s.label}</button>)}</div>)}</aside>}<main className="min-w-0 flex-1 overflow-x-auto p-3 md:p-6"><div className={cn("device-frame relative mx-auto overflow-hidden border border-border bg-background shadow-wire transition-[max-width]",device==="mobile"?"device-mobile max-w-[390px]":"max-w-[1440px]")}><StoreHeader go={setScreen} mobile={device==="mobile"}/><Screen id={screen} go={setScreen}/><Footer go={setScreen}/><SocialRail/></div></main></div></div>;
}