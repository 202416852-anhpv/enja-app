import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LanguageHubPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/30 px-6 py-12">
      <div className="w-full max-w-3xl space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="size-4 text-muted-foreground" />
                <CardTitle>Tiếng Nhật</CardTitle>
              </div>
            </CardHeader>

            <CardFooter>
              <Button asChild size="lg" className="w-full">
                <Link to="/japanese">
                  Vào học
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border border-dashed border-border bg-muted/20 ring-0">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Languages className="size-4 text-muted-foreground" />
                <CardTitle>Tiếng Anh</CardTitle>
              </div>
            </CardHeader>
            
            <CardFooter>
              <Button asChild size="lg" className="w-full">
                <Link to="/english">
                  Vào học
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
