-- CreateTable
CREATE TABLE "UserAccount" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "date" TIMESTAMP(3),
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilePic" TEXT NOT NULL DEFAULT 'default.png',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMinigame1" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserMinigame1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMinigame2" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserMinigame2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAccount_email_key" ON "UserAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserMinigame1_userEmail_key" ON "UserMinigame1"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "UserMinigame2_userEmail_key" ON "UserMinigame2"("userEmail");

-- AddForeignKey
ALTER TABLE "UserMinigame1" ADD CONSTRAINT "UserMinigame1_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "UserAccount"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMinigame2" ADD CONSTRAINT "UserMinigame2_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "UserAccount"("email") ON DELETE CASCADE ON UPDATE CASCADE;
