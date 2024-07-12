import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";

/**
 * Generate file data for test lib
 *
 * @returns {{}\}
 */
const generateFileData = () => {
  const data = [];
  const numberOfFiles = 1000; // Количество файлов для генерации
  const fileExtensions = ["pdf", "docx", "jpg", "png", "xlsx", "pptx", "mp4"];

  for (let i = 0; i < numberOfFiles; i++) {
    const folder = faker.helpers.arrayElement([
      "root\\folder1",
      "root\\folder2",
      "root\\folder3",
    ]);
    const fileName = faker.system.fileName();
    const fileExtension = faker.helpers.arrayElement(fileExtensions);
    const fileFullName = `${fileName}.${fileExtension}`;

    data.push({
      id: i + 1,
      currentUrlPlain: `${folder}\\${fileFullName}`,
      currentUrl: `/${folder.replace(/\\/g, "/")}/${fileFullName}`,
      name: fileFullName,
      file: true,
    });
  }

  return data;
};

/**
 * ${1:Description placeholder}
 *
 * @type {{}\}
 */
const data = generateFileData();
writeFileSync("src/shared/data/fileData.json", JSON.stringify(data, null, 2));
console.log("File data generated and saved to src/shared/data/fileData.json");
