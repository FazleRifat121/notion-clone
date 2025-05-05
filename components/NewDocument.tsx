"use client";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions/actions";

function NewDocument() {
  const [isPending, startTansition] = useTransition();
  const router = useRouter();
  const handleCreateNewDocument = () => {
    startTansition(async () => {
      const { docId } = await createNewDocument();
      router.push(`doc/${docId}`);
    });
  };
  return (
    <Button onClick={handleCreateNewDocument} disabled={isPending}>
      {isPending ? "Creating..." : "New Document"}
    </Button>
  );
}
export default NewDocument;
