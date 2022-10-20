/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `MenuItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE "menuitem_id_seq";
ALTER TABLE "MenuItem" ALTER COLUMN "id" SET DEFAULT nextval('menuitem_id_seq');
ALTER SEQUENCE "menuitem_id_seq" OWNED BY "MenuItem"."id";

-- CreateIndex
CREATE UNIQUE INDEX "MenuItem_id_key" ON "MenuItem"("id");
