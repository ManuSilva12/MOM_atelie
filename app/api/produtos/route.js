import Parse from "@/lib/parse";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const Produto = Parse.Object.extend("Produtos");
    const query = new Parse.Query(Produto);
    const results = await query.find();
    
    const produtosLimpos = results.map((p) => ({
      id: p.id,
      nome: p.get("nome") || "Sem nome",
      preco: p.get("preco") || 0,
      descricao: p.get("descricao") || "", 
      imagem: p.get("imagem") ? p.get("imagem").url() : "https://picsum.photos/300/200",
    }));

    return NextResponse.json(produtosLimpos);
  } catch (error) {
    // ESTA LINHA É A MAIS IMPORTANTE: Olhe o terminal do VS Code após salvar
    console.error("ERRO NO BACK4APP:", error.message);
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}