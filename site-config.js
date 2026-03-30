(function () {
  const STORAGE_KEY = "siamx-site-config-v1";

  const DEFAULT_CONFIG = {
    brand: {
      title: "暹罗X",
      subtitle: "内容作品 · 线下展陈 · 周边衍生"
    },
    hero: {
      eyebrow: "从内容到展陈，把情绪宇宙做成可以被逛到的 IP",
      title: "暹罗X",
      subtitle: "发疯不内耗，治愈不刻意✨",
      copy: "这次官网不只讲“人设”，而是按一套更完整的 IP 作品集来展开：先看品牌封面，再看代表作、线下展陈和周边落地。你能更快理解暹罗X不是单张表情包，而是一整个能做内容、能做空间、也能做产品的情绪宇宙。",
      image: {
        src: "assets/ppt-picked/brand-cover.png",
        alt: "暹罗X 品牌封面主视觉",
        fallbackLabel: "暹罗X 品牌封面",
        fallbackTone: "#19add0",
        fallbackVariant: "cover"
      }
    },
    story: {
      sectionTitle: "代表作·精选",
      eyebrow: "内容 / 展陈 / 联名 / 快闪",
      introTitle: "按作品线索理解暹罗X",
      introCopy: "这块我按照 PPT 里的“品牌封面 - 线下活动 - 品牌合作 - 空间落地”逻辑重新收了一遍。前台每次只聚焦一个代表作，你不用被一整页信息淹没，也能更顺地看懂暹罗X是怎么从内容长成一个完整 IP 的。",
      items: [
        {
          tabLabel: "品牌封面",
          badge: "品牌主视觉",
          title: "先用一张封面把暹罗X的气质讲明白",
          description: "这张图适合作为用户的第一眼入口，调性、配色和识别符号都够集中，能先把“情绪型 IP”的感觉立住。",
          type: "image",
          media: {
            src: "assets/ppt-picked/brand-cover.png",
            alt: "暹罗X 品牌封面主视觉",
            poster: "",
            fallbackLabel: "品牌封面",
            fallbackTone: "#19add0",
            fallbackVariant: "cover"
          }
        },
        {
          tabLabel: "线下展陈",
          badge: "线下活动",
          title: "把角色从屏幕里搬到真实展陈空间",
          description: "线下展陈比单张海报更能说明 IP 的延展力。看得到角色、场景和周边一起出现，品牌完整度会立刻上来。",
          type: "image",
          media: {
            src: "assets/ppt-picked/offline-booth.png",
            alt: "暹罗X 线下展陈现场",
            poster: "",
            fallbackLabel: "线下展陈",
            fallbackTone: "#f4d9bf",
            fallbackVariant: "cover"
          }
        },
        {
          tabLabel: "品牌合作",
          badge: "联名案例",
          title: "跨界合作让 IP 的使用场景更具体",
          description: "当角色进到联名产品里，用户会更直观地理解暹罗X不只是内容风格，也是一套能被穿戴、被携带、被消费的视觉语言。",
          type: "image",
          media: {
            src: "assets/ppt-picked/kappa-collab.png",
            alt: "暹罗X 联名合作案例",
            poster: "",
            fallbackLabel: "品牌合作",
            fallbackTone: "#1bb1d5",
            fallbackVariant: "cover"
          }
        },
        {
          tabLabel: "快闪空间",
          badge: "空间落地",
          title: "快闪空间把暹罗X做成能逛、能拍、能带走的现场",
          description: "这类空间型内容很适合放在官网里做高级感背书，它让人看到品牌世界观不是只停在画面里，而是真的能被走进去。",
          type: "image",
          media: {
            src: "assets/ppt-picked/cafe-popstore.png",
            alt: "暹罗X 快闪空间落地现场",
            poster: "",
            fallbackLabel: "快闪空间",
            fallbackTone: "#f6caa9",
            fallbackVariant: "cover"
          }
        }
      ]
    },
    philosophy: {
      sectionTitle: "创作·理念",
      cards: [
        {
          icon: "😼",
          title: "反完美主义",
          text: "不伪装、不迎合，发疯也可爱，摆烂也快乐，还原最真实的情绪模样。"
        },
        {
          icon: "🌧️",
          title: "情绪治愈",
          text: "用沙雕消解内耗，用陪伴温暖日常，每一个情绪都值得被看见。"
        },
        {
          icon: "🐾",
          title: "真诚陪伴",
          text: "不做遥远的 IP，做你身边的情绪搭子，一起解锁不内耗的日常。"
        }
      ]
    },
    products: {
      sectionTitle: "周边·落地好物",
      intro: "这里不只放单个 SKU，我把更适合官网浏览的几类落地成果放在一起：周边实拍、联名套组、展陈组合和空间快闪。这样用户能同时看到“产品感”和“品牌落地感”。",
      items: [
        {
          tag: "毛绒周边",
          title: "换脸小猫第一代",
          text: "把情绪做成可替换表情的毛绒周边，既有玩点，也很适合做“角色记忆点”入口。",
          image: {
            src: "assets/ppt-picked/product-maskcat-1st-gen.png",
            alt: "换脸小猫第一代周边展示",
            fallbackLabel: "换脸小猫第一代",
            fallbackTone: "#19add0"
          }
        },
        {
          tag: "升级周边",
          title: "换脸小猫第二代",
          text: "第二代把玩法和功能一起升级，更适合放在官网里做“产品进化”展示，也更容易拉住停留时长。",
          image: {
            src: "assets/ppt-picked/product-maskcat-2nd-gen.png",
            alt: "换脸小猫第二代周边展示",
            fallbackLabel: "换脸小猫第二代",
            fallbackTone: "#19add0"
          }
        },
        {
          tag: "联名套组",
          title: "Kappa 联名快闪周边",
          text: "联名合作会天然带来品牌背书，放在官网里能补强暹罗X的商业化想象空间。",
          image: {
            src: "assets/ppt-picked/kappa-collab.png",
            alt: "暹罗X 与 Kappa 的联名周边",
            fallbackLabel: "Kappa 联名",
            fallbackTone: "#1bb1d5"
          }
        },
        {
          tag: "展陈组合",
          title: "艺术节陈列限定组合",
          text: "把周边和线下陈列放在一起展示，比单张产品图更能体现“这个 IP 已经活起来了”。",
          image: {
            src: "assets/ppt-picked/offline-booth.png",
            alt: "暹罗X 艺术节展陈与周边陈列",
            fallbackLabel: "艺术节展陈",
            fallbackTone: "#f4d9bf"
          }
        },
        {
          tag: "空间快闪",
          title: "喵咖快闪店限定周边",
          text: "空间和商品一起出现时，用户会更自然地建立“想去现场看看”的冲动，这比纯购买按钮更适合现在这版官网。",
          image: {
            src: "assets/ppt-picked/cafe-popstore.png",
            alt: "暹罗X 喵咖快闪店限定周边",
            fallbackLabel: "快闪空间周边",
            fallbackTone: "#f6caa9"
          }
        }
      ]
    },
    follow: {
      title: "前往小红书 遇见暹罗X✨",
      copy: "搜索「暹罗X」｜解锁更多沙雕日常、IP 周边购买渠道，还有不定时掉落的情绪小剧场。",
      buttonText: "立即关注",
      link: ""
    },
    footer: {
      copyright: "© 2026 暹罗X All Rights Reserved",
      account: "小红书：暹罗X",
      note: "所有周边均为官方正版，如需购买请前往小红书咨询。"
    }
  };

  const LEGACY_ASSET_REWRITES = {
    "assets/banner-family.webp": "assets/ppt-picked/brand-cover.png",
    "assets/story-family-cover.webp": "assets/ppt-picked/brand-cover.png",
    "assets/story-lipu-moment.gif": "assets/ppt-picked/offline-booth.png",
    "assets/story-tianzhong-short.mp4": "",
    "assets/story-tianzhong-cover.webp": "assets/ppt-picked/kappa-collab.png",
    "assets/product-duodong-plush.webp": "assets/ppt-picked/product-maskcat-1st-gen.png",
    "assets/product-tianzhong-amulet.webp": "assets/ppt-picked/product-maskcat-2nd-gen.png",
    "assets/product-lipu-blindbox.webp": "assets/ppt-picked/kappa-collab.png",
    "assets/product-xiuzhen-magnet.webp": "assets/ppt-picked/offline-booth.png",
    "assets/product-xiaohe-notebook.webp": "assets/ppt-picked/cafe-popstore.png",
    "assets/product-family-stickers.webp": "assets/ppt-picked/brand-cover.png"
  };

  const LEGACY_STORY_MEDIA_SRCS = new Set([
    "assets/story-family-cover.webp",
    "assets/story-lipu-moment.gif",
    "assets/story-tianzhong-short.mp4"
  ]);

  const LEGACY_PRODUCT_MEDIA_SRCS = new Set([
    "assets/product-duodong-plush.webp",
    "assets/product-tianzhong-amulet.webp",
    "assets/product-lipu-blindbox.webp",
    "assets/product-xiuzhen-magnet.webp",
    "assets/product-xiaohe-notebook.webp",
    "assets/product-family-stickers.webp"
  ]);

  function cloneConfig(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function normalizeText(value, fallback) {
    if (typeof value === "string") {
      return value;
    }
    return fallback;
  }

  function rewriteLegacyAssetPath(value) {
    if (typeof value !== "string") {
      return value;
    }

    const normalizedValue = value.trim();
    return Object.prototype.hasOwnProperty.call(LEGACY_ASSET_REWRITES, normalizedValue)
      ? LEGACY_ASSET_REWRITES[normalizedValue]
      : value;
  }

  function isLegacyStoryCollection(items) {
    return Array.isArray(items) &&
      items.length > 0 &&
      items.every((item) => LEGACY_STORY_MEDIA_SRCS.has(item && item.media && item.media.src));
  }

  function isLegacyProductCollection(items) {
    return Array.isArray(items) &&
      items.length > 0 &&
      items.every((item) => LEGACY_PRODUCT_MEDIA_SRCS.has(item && item.image && item.image.src));
  }

  function normalizeImage(image, defaults) {
    const source = image && typeof image === "object" ? image : {};
    return {
      src: rewriteLegacyAssetPath(normalizeText(source.src, defaults.src)),
      alt: normalizeText(source.alt, defaults.alt),
      fallbackLabel: normalizeText(source.fallbackLabel, defaults.fallbackLabel),
      fallbackTone: normalizeText(source.fallbackTone, defaults.fallbackTone),
      fallbackVariant: normalizeText(source.fallbackVariant, defaults.fallbackVariant || "card")
    };
  }

  function normalizeStoryItem(item, defaults) {
    const source = item && typeof item === "object" ? item : {};
    return {
      tabLabel: normalizeText(source.tabLabel, defaults.tabLabel),
      badge: normalizeText(source.badge, defaults.badge),
      title: normalizeText(source.title, defaults.title),
      description: normalizeText(source.description, defaults.description),
      type: ["image", "gif", "video"].includes(source.type) ? source.type : defaults.type,
      media: {
        ...normalizeImage(source.media, defaults.media),
        poster: normalizeText(
          rewriteLegacyAssetPath(source.media && source.media.poster),
          defaults.media.poster || ""
        )
      }
    };
  }

  function normalizeConfig(input) {
    const source = input && typeof input === "object" ? input : {};
    const defaults = DEFAULT_CONFIG;
    const legacyStoryImage = source.story && source.story.image;
    const legacyStoryParagraphs = source.story && Array.isArray(source.story.paragraphs)
      ? source.story.paragraphs.filter(Boolean)
      : [];
    const preferDefaultStory = isLegacyStoryCollection(source.story && source.story.items);
    const preferDefaultProducts = isLegacyProductCollection(source.products && source.products.items);
    const storySource = preferDefaultStory ? defaults.story : (source.story || {});
    const productsSource = preferDefaultProducts ? defaults.products : (source.products || {});
    const storyItems = Array.isArray(source.story && source.story.items) &&
      source.story.items.length &&
      !preferDefaultStory
      ? source.story.items.slice(0, 10)
      : defaults.story.items;
    const philosophyCards = Array.isArray(source.philosophy && source.philosophy.cards) &&
      source.philosophy.cards.length
      ? source.philosophy.cards
      : defaults.philosophy.cards;
    const productItems = Array.isArray(source.products && source.products.items) &&
      source.products.items.length &&
      !preferDefaultProducts
      ? source.products.items
      : defaults.products.items;

    return {
      brand: {
        title: normalizeText(source.brand && source.brand.title, defaults.brand.title),
        subtitle: normalizeText(source.brand && source.brand.subtitle, defaults.brand.subtitle)
      },
      hero: {
        eyebrow: normalizeText(source.hero && source.hero.eyebrow, defaults.hero.eyebrow),
        title: normalizeText(source.hero && source.hero.title, defaults.hero.title),
        subtitle: normalizeText(source.hero && source.hero.subtitle, defaults.hero.subtitle),
        copy: normalizeText(source.hero && source.hero.copy, defaults.hero.copy),
        image: normalizeImage(source.hero && source.hero.image, defaults.hero.image)
      },
      story: {
        sectionTitle: normalizeText(storySource.sectionTitle, defaults.story.sectionTitle),
        eyebrow: normalizeText(storySource.eyebrow, defaults.story.eyebrow),
        introTitle: normalizeText(storySource.introTitle, defaults.story.introTitle),
        introCopy: normalizeText(
          storySource.introCopy,
          legacyStoryParagraphs.length ? legacyStoryParagraphs.join(" ") : defaults.story.introCopy
        ),
        items: storyItems.map((item, index) => {
          const itemDefaults = defaults.story.items[index] || defaults.story.items[0];
          if (!Array.isArray(source.story && source.story.items) && index === 0 && legacyStoryImage) {
            return normalizeStoryItem({
              ...itemDefaults,
              media: {
                ...itemDefaults.media,
                src: normalizeText(legacyStoryImage.src, itemDefaults.media.src),
                alt: normalizeText(legacyStoryImage.alt, itemDefaults.media.alt),
                fallbackLabel: normalizeText(legacyStoryImage.fallbackLabel, itemDefaults.media.fallbackLabel),
                fallbackTone: normalizeText(legacyStoryImage.fallbackTone, itemDefaults.media.fallbackTone),
                fallbackVariant: normalizeText(legacyStoryImage.fallbackVariant, itemDefaults.media.fallbackVariant)
              }
            }, itemDefaults);
          }
          return normalizeStoryItem(item, itemDefaults);
        })
      },
      philosophy: {
        sectionTitle: normalizeText(
          source.philosophy && source.philosophy.sectionTitle,
          defaults.philosophy.sectionTitle
        ),
        cards: philosophyCards.map((card, index) => {
          const cardDefaults = defaults.philosophy.cards[index] || defaults.philosophy.cards[0];
          return {
            icon: normalizeText(card && card.icon, cardDefaults.icon),
            title: normalizeText(card && card.title, cardDefaults.title),
            text: normalizeText(card && card.text, cardDefaults.text)
          };
        })
      },
      products: {
        sectionTitle: normalizeText(productsSource.sectionTitle, defaults.products.sectionTitle),
        intro: normalizeText(productsSource.intro, defaults.products.intro),
        items: productItems.map((item, index) => {
          const itemDefaults = defaults.products.items[index] || defaults.products.items[0];
          return {
            tag: normalizeText(item && item.tag, itemDefaults.tag),
            title: normalizeText(item && item.title, itemDefaults.title),
            text: normalizeText(item && item.text, itemDefaults.text),
            image: normalizeImage(item && item.image, itemDefaults.image)
          };
        })
      },
      follow: {
        title: normalizeText(source.follow && source.follow.title, defaults.follow.title),
        copy: normalizeText(source.follow && source.follow.copy, defaults.follow.copy),
        buttonText: normalizeText(source.follow && source.follow.buttonText, defaults.follow.buttonText),
        link: normalizeText(source.follow && source.follow.link, defaults.follow.link)
      },
      footer: {
        copyright: normalizeText(source.footer && source.footer.copyright, defaults.footer.copyright),
        account: normalizeText(source.footer && source.footer.account, defaults.footer.account),
        note: normalizeText(source.footer && source.footer.note, defaults.footer.note)
      }
    };
  }

  function getConfig() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return cloneConfig(DEFAULT_CONFIG);
      }
      return normalizeConfig(JSON.parse(raw));
    } catch (error) {
      return cloneConfig(DEFAULT_CONFIG);
    }
  }

  function saveConfig(config) {
    const normalized = normalizeConfig(config);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return cloneConfig(normalized);
  }

  function resetConfig() {
    window.localStorage.removeItem(STORAGE_KEY);
    return cloneConfig(DEFAULT_CONFIG);
  }

  window.SIAMX_CONFIG = {
    STORAGE_KEY,
    defaultConfig: cloneConfig(DEFAULT_CONFIG),
    cloneConfig,
    normalizeConfig,
    getConfig,
    saveConfig,
    resetConfig
  };
})();
