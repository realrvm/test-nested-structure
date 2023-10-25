import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { useStateSelector } from "@/app/providers/rtk-provider";
import { ClothingSchema, getClothingList } from "@/entities/clothing";
import { findItem } from "@/shared/lib/helpers";
import { AppLink } from "@/shared/ui/app-link";

import styles from "./styles.module.scss";

type CategoryProps = Record<string, never>;

export const Category: FC<CategoryProps> = memo(() => {
  const [item, setItem] = useState<ClothingSchema | undefined>();
  const data = useStateSelector(getClothingList);
  const { slug } = useParams();
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  useEffect(() => {
    setItem(findItem(data, slug as string));
  }, [data, slug]);

  return (
    <HelmetProvider>
      <div className={styles.category}>
        <Helmet>
          <title>{item?.name}</title>
          <meta name="robots" content={item?.index ? "index" : "noindex"} />
        </Helmet>
        <h1>{item?.name}</h1>
        <button onClick={goBack}>Back</button>
        {item?.children?.map((el) => {
          return (
            <AppLink to={`/${el.slug}`} key={el.id}>
              {el.name}
            </AppLink>
          );
        })}
      </div>
    </HelmetProvider>
  );
});
