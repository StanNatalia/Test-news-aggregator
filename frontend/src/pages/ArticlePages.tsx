import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const ArticlePages = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state;

  const cleanContent = (html: string) => {
    return html
      .replace(/<ul>\s*(<li>\s*<\/li>\s*)+<\/ul>/g, "")
      .replace(/\[\+\d+ chars\]/g, "")
      .trim();
  };

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground text-lg">Article not found 😕</p>
        <Button variant="outline" onClick={() => navigate("/")}>
          Back to news
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back button */}
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to news
      </Button>

      {/* Article card */}
      <article className="bg-background border rounded-xl shadow-sm overflow-hidden">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-[320px] object-cover"
          />
        )}

        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
            {article.title}
          </h1>

          <p className="text-sm text-muted-foreground mb-6">
            {article.source?.name}
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>

          <div className="prose prose-neutral max-w-none mb-6">
            <p>{cleanContent(article.content)}</p>
          </div>

          <div className="flex justify-between items-center">
            <Button
              asChild
              variant="default"
              className="flex items-center gap-2"
            >
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read original
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticlePages;
