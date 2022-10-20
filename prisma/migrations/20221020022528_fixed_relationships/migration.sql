-- DropForeignKey
ALTER TABLE "MenuItem" DROP CONSTRAINT "MenuItem_id_fkey";

-- DropIndex
DROP INDEX "Menu_name_key";

-- DropIndex
DROP INDEX "MenuItem_id_key";

-- AlterTable
ALTER TABLE "MenuItem" ADD COLUMN     "menuId" INTEGER;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;
