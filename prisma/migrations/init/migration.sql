-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(155) NOT NULL,
    "password" TEXT NOT NULL,
    "historicId" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historic" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "streak" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_historicId_fkey" FOREIGN KEY ("historicId") REFERENCES "historic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
