import { createBrowserRouter } from "react-router-dom";

import LanguageHubPage from "../pages/LanguageHubPage";
import LevelsPage from "../pages/japanese/LevelsPage";
import DashboardPage from "../pages/japanese/DashboardPage";
import KanjiListPage from "../pages/japanese/KanjiListPage";
import KanjiDetailPage from "../pages/japanese/KanjiDetailPage";
import VocabularyListPage from "../pages/japanese/VocabularyListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LanguageHubPage />,
  },
  {
    path: "/japanese",
    element: <LevelsPage />,
  },
  {
    path: "/japanese/:level",
    element: <DashboardPage />,
  },
  {
    path: "/japanese/:level/kanji",
    element: <KanjiListPage />,
  },
  {
    path: "/japanese/:level/kanji/:kanjiId",
    element: <KanjiDetailPage />,
  },
  {
    path: "/japanese/:level/vocabulary",
    element: <VocabularyListPage />,
  },
]);
