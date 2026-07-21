// 自动生成的JS文件 - questions-01.jsonより変換
var questionsData01 = {
  "title": "模拟试题 01",
  "questions": [
    {
      "number": 1,
      "question": "GitHub Copilotの開発を導く、Microsoftの責任あるAIの6つの主要原則を正しく表しているのは次のうちどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "効率性、速度、正確性、革新性、信頼性、セキュリティ"
        },
        {
          "id": "B",
          "text": "セキュリティ、開発、運用、保守、サポート、ドキュメンテーション"
        },
        {
          "id": "C",
          "text": "公平性、信頼性と安全性、プライバシーとセキュリティ、包括性、透明性、説明責任"
        },
        {
          "id": "D",
          "text": "プライバシー、パフォーマンス、アクセシビリティ、スケーラビリティ、保守性、テスト"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "微软负责任AI的六大核心原则是：**公平性 (Fairness)、可靠性与安全性 (Reliability and Safety)、隐私与保障 (Privacy and Security)、包容性 (Inclusiveness)、透明度 (Transparency)、问责制 (Accountability)**。选项C完全准确地列出了这六项。"
    },
    {
      "number": 2,
      "question": "あなたはKotlinでアプリケーションを開発しています。GitHub Copilotを使用する際、何を念頭に置く必要がありますか？",
      "choices": [
        {
          "id": "A",
          "text": "KotlinはGitHub Copilotが強力なサポートを提供する言語に含まれているため、どれも正しくありません。"
        },
        {
          "id": "B",
          "text": "KotlinはGitHub Copilotが強力なサポートを提供する言語に含まれていません。その結果、Ruby、Java、C#など、よりサポートされている言語でのコード提案と比較して、提案の品質が同等ではない可能性があります。"
        },
        {
          "id": "C",
          "text": "KotlinはGitHub Copilotが強力なサポートを提供する言語に含まれていません。その結果、GitHub Copilotはコードの説明や修正はできますが、コード提案は提供できません。"
        },
        {
          "id": "D",
          "text": "KotlinはGitHub Copilotが強力なサポートを提供する言語に含まれていません。その結果、GitHub Copilotはコードの説明や修正もできません。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "GitHub Copilot 对多种主流语言提供强大支持，但对某些语言（如Kotlin）的支持可能**不如Java、Python、JavaScript等语言那么全面或成熟**。这意味着它仍然可以提供建议，但**质量和准确性可能有所差异（B）**。它通常仍能提供建议、解释和修复，并非完全不能工作（C、D错误）。"
    },
    {
      "number": 3,
      "question": "GitHub Copilotは、IDE内でのコード提案に関して、データ保持をどのように処理しますか？",
      "choices": [
        {
          "id": "A",
          "text": "提案はバージョン管理のためにGitHubリポジトリに自動的に保存されます。"
        },
        {
          "id": "B",
          "text": "提案は一時的にメモリに保持され、使用後は破棄され、ディスクには書き込まれません。"
        },
        {
          "id": "C",
          "text": "コードスニペットは削除される前に30日間ディスクにキャッシュされます。"
        },
        {
          "id": "D",
          "text": "すべての提案は将来の参照のためにローカルデータベースに永久に保存されます。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "根据GitHub的隐私说明，为了提供低延迟的体验，Copilot的代码建议会在**本地设备的临时内存中短暂处理**，并且在大多数情况下，这些建议在会话结束后**不会被持久化存储到磁盘（B）**。这是其隐私设计的一部分。选项A、C、D描述的数据保留方式均不准确。"
    },
    {
      "number": 4,
      "question": "GitHub Copilot Chatで選択可能なモードでないものは、次のうちどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "Ask"
        },
        {
          "id": "B",
          "text": "Edit"
        },
        {
          "id": "C",
          "text": "Agent"
        },
        {
          "id": "D",
          "text": "Translate"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "翻译（Translate）功能可能在某些场景下作为一项具体的操作指令存在，但它不属于 Copilot Chat 的核心聊天模式。"
    },
    {
      "number": 5,
      "question": "次のうち、開発者のワークフローを強化するためにGitHub Copilotを使用することの潜在的な利点はどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "開発者の生産性を向上させるためにコードスニペットを提案できます。"
        },
        {
          "id": "B",
          "text": "すべてのプロジェクトにおいてコードレビューの必要性を完全に置き換えます。"
        },
        {
          "id": "C",
          "text": "人間の承認なしにプルリクエストを自動的にマージします。"
        },
        {
          "id": "D",
          "text": "単一のプログラミング言語で書かれたソフトウェアでのみ動作します。"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot最核心、最现实的益处是通过智能代码补全和建议，**提高开发者的生产效率（A）**。它不能取代代码审查（B）、自动合并请求（C），并且支持多种编程语言（D错误）。"
    },
    {
      "number": 6,
      "question": "請求サイクル中、エンタープライズレベルでのGitHub Copilotのシート使用量はどのように計算されますか？",
      "choices": [
        {
          "id": "A",
          "text": "コード提案数 × 受け入れられた補完数"
        },
        {
          "id": "B",
          "text": "コミットの総数 × アクティブな開発者数"
        },
        {
          "id": "C",
          "text": "シート数 × (経過日数 / 請求サイクルの総日数)"
        },
        {
          "id": "D",
          "text": "リポジトリの総サイズ × 組織数"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "企业级订阅的席位（Seat）使用量计算通常基于**按比例分配（Prorated）** 的原则。如果用户在计费周期中间加入或离开，费用会根据**实际使用的天数占整个计费周期天数的比例（C）** 来计算，这是一种标准的SaaS订阅计费模式。"
    },
    {
      "number": 7,
      "question": "GitHub Copilotは誰でも無料で使用できますか？",
      "choices": [
        {
          "id": "A",
          "text": "はい"
        },
        {
          "id": "B",
          "text": "いいえ"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "GitHub Copilot 是一项**付费订阅服务**（有免费试用期）。它并非对所有人免费。对于符合条件的知名开源项目维护者和学生，GitHub可能提供免费订阅，但这属于特例，并非普遍情况。因此，正确答案是 **B（いいえ）**。"
    },
    {
      "number": 8,
      "question": "チャットでコンテキストを追加する際、単一のファイルを追加することは可能ですが、フォルダ全体を追加することはできません。この記述は正しいですか？",
      "choices": [
        {
          "id": "A",
          "text": "真"
        },
        {
          "id": "B",
          "text": "偽"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "在Copilot Chat中，您可以使用类似`@workspace`的聊天变量来引用**整个工作区（包含多个文件和文件夹）** 作为上下文。因此，**提供整个文件夹（乃至整个项目）的上下文是可能的**。该陈述是错误的。"
    },
    {
      "number": 9,
      "question": "Copilotのコンテンツ除外について正しいのはどれですか？（2つ選択）",
      "choices": [
        {
          "id": "A",
          "text": "コンテンツ除外はコード補完に影響しません。"
        },
        {
          "id": "B",
          "text": "コンテンツ除外は即座に適用されます。"
        },
        {
          "id": "C",
          "text": "コンテキスト除外はリポジトリレベルと組織レベルで設定できます。"
        },
        {
          "id": "D",
          "text": "Copilotは除外されたファイルを完全に無視します。"
        },
        {
          "id": "E",
          "text": "Copilotはプライバシーを考慮したさまざまなプランを提供しています。"
        }
      ],
      "correctAnswer": [
        "C",
        "E"
      ],
      "isMultipleChoice": true,
      "explanation": "内容排除策略可以在**组织级别统一设置，也可以为特定仓库进行配置（C）**。GitHub提供不同层级的Copilot计划以满足不同的安全和隐私需求（E）。内容排除策略的生效通常需要几分钟（B中的“即座”不正确）。内容排除会直接影响代码补全（A错误）。Copilot可能仍会“感知”被排除文件中被其他代码引用的符号（D中“完全に無視”表述过于绝对）。"
    },
    {
      "number": 10,
      "question": "GitHub Copilotの使用に関するセキュリティ、知的財産、プライバシーに関する懸念事項に関する情報はどこで入手できますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot トラストセンター"
        },
        {
          "id": "B",
          "text": "GitHub Copilot コンプライアンスセンター"
        },
        {
          "id": "C",
          "text": "GitHub Copilot コンプライアンスハブ"
        },
        {
          "id": "D",
          "text": "GitHub Copilot 法務・信頼センター"
        },
        {
          "id": "E",
          "text": "GitHub Copilot 法務センター"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "关于GitHub产品（包括Copilot）的安全、合规、隐私和法律信息的官方集中门户，通常是 **“GitHub Trust Center”（GitHubトラストセンター）（A）**。这是获取相关白皮书、合规报告、隐私声明等信息的标准入口。"
    },
    {
      "number": 11,
      "question": "正しい文章はどれですか？（2つ選択）",
      "choices": [
        {
          "id": "A",
          "text": "チャット参加者（@workspaceや@vscodeなど）は、コードベース、特定のドメイン、またはテクノロジーに関する追加のコンテキストを提供するために使用できます。"
        },
        {
          "id": "B",
          "text": "単一のプロンプトでチャット参加者、コマンド、チャット変数を組み合わせることはできません。"
        },
        {
          "id": "C",
          "text": "スラッシュコマンド（/tests、/fix、/explainなど）は、プロンプトで達成したいことを簡潔に伝える方法です。"
        },
        {
          "id": "D",
          "text": "チャット参加者は、同じ組織内の他のメンバーをタグ付けするためだけに使用できます。"
        }
      ],
      "correctAnswer": [
        "A",
        "C"
      ],
      "isMultipleChoice": true,
      "explanation": "选项A正确：`@workspace`等变量用于为对话提供额外上下文。选项C正确：斜杠命令是触发特定功能的简洁方式。选项B错误：可以组合使用这些元素（例如`@workspace /explain`）。选项D错误：这些变量的主要功能是引用上下文，而非标记人员。"
    },
    {
      "number": 12,
      "question": "GitHub Copilotは、GitHub Copilotのコンテンツ除外によって無視されたファイルから意味情報を使用できますか？",
      "choices": [
        {
          "id": "A",
          "text": "いいえ、除外されたファイルからのすべての情報を無視します。"
        },
        {
          "id": "B",
          "text": "はい、その情報がIDEによって間接的に提供される場合。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "“内容排除”策略阻止Copilot直接参考特定文件。但是，如果被排除文件的**内容（如函数名、变量）在未被排除的其他代码中被显式引用或调用**，那么Copilot在理解那段未被排除的代码上下文时，可能仍然会间接“感知”到被排除内容的存在（B）。这是一种潜在的上下文泄露边界情况。"
    },
    {
      "number": 13,
      "question": "GitHub CopilotがサポートするIDEはどれですか？（2つ選択）",
      "choices": [
        {
          "id": "A",
          "text": "Visual Studio、NetBeans、Eclipse"
        },
        {
          "id": "B",
          "text": "Azure Data Studio、Visual Studio、IntelliJ IDEA"
        },
        {
          "id": "C",
          "text": "Visual Studio、BlueJ、NetBeans"
        },
        {
          "id": "D",
          "text": "Visual Studio Code、Xcode、Vim/NeoVim"
        }
      ],
      "correctAnswer": [
        "B",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "GitHub Copilot官方支持多种主流编辑器和IDE，包括但不限于：**Visual Studio Code、Visual Studio、JetBrains系列IDE（如IntelliJ IDEA）、NeoVim/Vim**等。因此，选项B（包含Visual Studio和IntelliJ IDEA）和D（包含Visual Studio Code和Vim/NeoVim）是正确组合。NetBeans、Eclipse、BlueJ等不在官方广泛支持列表中。"
    },
    {
      "number": 14,
      "question": "GitHub Copilotの公開コード一致機能はどのように機能しますか？",
      "choices": [
        {
          "id": "A",
          "text": "プライベートリポジトリを含むすべてのGitHubリポジトリに対してリアルタイム検索を実行します。"
        },
        {
          "id": "B",
          "text": "数ヶ月ごとに更新される公開GitHubリポジトリのインデックスに対してコード提案を比較して一致を検索します。"
        },
        {
          "id": "C",
          "text": "GitHub外部の外部コードホスティングプラットフォームに対してコードをチェックします。"
        },
        {
          "id": "D",
          "text": "過去24時間以内に作成されたリポジトリからのコードのみを一致させます。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "公共代码匹配功能的工作原理是：将生成的代码建议与一个**定期（非实时）更新的、由公开GitHub仓库代码构建的索引**进行比较（B）。它不进行实时全网搜索（A），不检查外部平台（C），也没有24小时的时间限制（D）。"
    },
    {
      "number": 15,
      "question": "GitHub Copilotの応答に対して行われる後処理チェックは何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "パフォーマンスベンチマーキングとメモリ使用量の最適化"
        },
        {
          "id": "B",
          "text": "コンパイルエラーとランタイム例外のチェックのみ"
        },
        {
          "id": "C",
          "text": "有害な言語、関連性、コード品質（セキュリティ脆弱性を含む）、一意の識別子、およびオプションの公開コードマッチング"
        },
        {
          "id": "D",
          "text": "構文検証とコードフォーマットチェックのみ"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot在将生成的代码发送给用户之前，会进行一系列后处理安全检查。这通常包括：**检测和过滤有害或不适当的内容（毒性语言）、检查建议与上下文的相关性、进行基本的代码质量筛选（可能包括安全漏洞模式）、删除或混淆可能的个人标识信息，以及根据设置进行公共代码匹配检查（C）**。它不是进行性能优化（A）或仅检查语法（D）。"
    },
    {
      "number": 16,
      "question": "GitHub Copilotエディター構成ファイルについて説明しているのは次のうちどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "Copilot Chatの応答をカスタマイズするための自然言語による指示が書かれたマークダウンファイル"
        },
        {
          "id": "B",
          "text": "ビルド指示が書かれたYAMLファイル"
        },
        {
          "id": "C",
          "text": "セキュリティ設定が書かれたJSONファイル"
        },
        {
          "id": "D",
          "text": "デプロイ設定が書かれたXMLファイル"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "GitHub Copilot允许用户通过在工作区根目录创建名为 **`.github/copilot-instructions.md`** 的Markdown文件，来提供**自然语言编写的自定义指令和指南（A）**，以此指导Copilot在整个项目中的行为。这不是用于构建、安全或部署的配置文件。"
    },
    {
      "number": 17,
      "question": "特定のファイルをGitHub Copilotから除外するにはどうすればよいですか？",
      "choices": [
        {
          "id": "A",
          "text": ".gitignoreファイルを編集する"
        },
        {
          "id": "B",
          "text": "ターミナルでコマンドを使用する"
        },
        {
          "id": "C",
          "text": "Copilot構成ファイルで除外を構成する"
        },
        {
          "id": "D",
          "text": "GitHubでリポジトリ設定をブラウズし、除外するパスを追加する"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "对于GitHub Copilot Business/Enterprise订阅，排除特定文件或目录的官方方法是通过 **GitHub网站上的组织或仓库设置界面（D）** 进行配置。`.gitignore`（A）用于版本控制，与Copilot的上下文引用无关。没有标准的终端命令（B）或本地配置文件（C）用于此目的。"
    },
    {
      "number": 18,
      "question": "GitHub Copilotが提案を生成する際にコンテキストとして使用できる要素はどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "プロジェクトのREADMEファイルだけ"
        },
        {
          "id": "B",
          "text": "編集されている現在のコード行のみで、周囲のコンテキストはなし"
        },
        {
          "id": "C",
          "text": "インターネットからの外部ドキュメントのみ"
        },
        {
          "id": "D",
          "text": "現在のファイル内のコンテンツ、隣接ファイル、リポジトリURL、ファイルパス、および以前のチャット対話"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot生成建议时，会利用多种上下文来源，主要包括：**当前打开的文件内容、同一项目中打开的相关文件（邻接文件）、项目/文件的路径信息，以及当前聊天会话的历史记录（D）**。它不仅仅依赖README（A）、单行代码（B）或纯外部文档（C）。"
    },
    {
      "number": 19,
      "question": "GitHub Copilot CLIについて正しい記述はどれですか？（3つ選択）",
      "choices": [
        {
          "id": "A",
          "text": "オプションの使用状況分析は匿名化されているため、オプトアウトすることはできません。"
        },
        {
          "id": "B",
          "text": "Copilot CLIによって生成された応答は、各提案の後に確認できます。"
        },
        {
          "id": "C",
          "text": "プロンプトと使用状況分析の両方がデフォルトで保持されます。"
        },
        {
          "id": "D",
          "text": "オプションの使用状況分析をオプトアウトすることは可能です。"
        },
        {
          "id": "E",
          "text": "プロンプトは保持されませんが、使用状況分析はデフォルトで保持されます。"
        },
        {
          "id": "F",
          "text": "GitHub Copilot CLIはコマンドを説明または提案することしかできず、ユーザーに代わってコマンドを実行することはできません。"
        }
      ],
      "correctAnswer": [
        "B",
        "D",
        "E"
      ],
      "isMultipleChoice": true,
      "explanation": "关于Copilot CLI的正确描述包括：其建议**通常需要用户确认才会执行（B）**；用户可以**选择退出（オプトアウト）可选的使用情况分析数据收集（D）**；其数据处理政策通常是**提示词不保留，但聚合的使用情况数据会被默认收集用于改进服务（E）**。选项A（不能退出）和C（两者都保留）与常见的隐私政策不符。选项F不完全正确，因为CLI可以建议并执行命令（经用户确认后）。"
    },
    {
      "number": 20,
      "question": "GitHub Copilotからコンテンツを除外するとどうなりますか？（2つ選択）",
      "choices": [
        {
          "id": "A",
          "text": "影響を受けるファイルでのコード補完は影響を受けません。"
        },
        {
          "id": "B",
          "text": "影響を受けるファイル内のコンテンツは、GitHub Copilot Chatの応答を引き続き情報提供します。"
        },
        {
          "id": "C",
          "text": "影響を受けるファイル内のコンテンツは、他のファイルでのコード補完提案を情報提供しません。"
        },
        {
          "id": "D",
          "text": "影響を受けるファイルではコード補完は利用できなくなります。"
        }
      ],
      "correctAnswer": [
        "C",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "内容排除的核心效果是双向的：1. **防止Copilot作用于**：在已被排除的文件内，**Copilot将不再提供任何代码补全建议（D）**。2. **防止Copilot参考**：被排除的内容将**不会作为生成其他文件建议的上下文来源（C）**。"
    },
    {
      "number": 21,
      "question": "コードレビューのコーディングガイドラインを指定できるGitHub Copilotサブスクリプションプランはどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "Copilot Business と Copilot Enterprise"
        },
        {
          "id": "B",
          "text": "Copilot Pro+、Copilot Business と Copilot Enterprise"
        },
        {
          "id": "C",
          "text": "Copilot Enterprise"
        },
        {
          "id": "D",
          "text": "Copilot Pro、Copilot Pro+、Copilot Business と Copilot Enterprise"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "为代码审查配置定制化的编码指南或策略，通常是一项高级的企业级功能，可能仅限于 **GitHub Copilot Enterprise（C）** 计划。Business及以下级别的计划可能不提供这种深度的、策略驱动的审查指导配置。"
    },
    {
      "number": 22,
      "question": "プロンプトエンジニアリングの原則の一部は何ですか？（3つ選択）",
      "choices": [
        {
          "id": "A",
          "text": "単一の明確に定義されたタスクに焦点を当てる"
        },
        {
          "id": "B",
          "text": "長く複雑な指示を書く"
        },
        {
          "id": "C",
          "text": "指示が詳細かつ明確であることを確認する"
        },
        {
          "id": "D",
          "text": "AIに豊富なコンテキストを提供する"
        }
      ],
      "correctAnswer": [
        "A",
        "C",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "有效的Prompt Engineering原则包括：**聚焦于单一、明确的任务（A）**；**确保指令详细且明确（C）**；**为模型提供丰富的上下文信息（D）**。编写冗长复杂的指令（B）通常会导致模型困惑，并非好原则。"
    },
    {
      "number": 23,
      "question": "@workspaceと#codebaseの使用について正しい記述はどれですか？（2つ選択）",
      "choices": [
        {
          "id": "A",
          "text": "@workspaceキーワードはユーザープロンプトを担当するため、他のツールを使用できます。"
        },
        {
          "id": "B",
          "text": "#codebaseキーワードはすべてのチャットモードで使用できます。"
        },
        {
          "id": "C",
          "text": "@workspaceキーワードはすべてのチャットモードで使用できます。"
        },
        {
          "id": "D",
          "text": "@workspaceと#codebaseはどちらもコードベース全体について質問できるようにしますが、#codebaseの使用が推奨されます。"
        }
      ],
      "correctAnswer": [
        "B",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "官方答案，记住"
    },
    {
      "number": 24,
      "question": "GitHub Copilotの生産性APIの使用方法について説明しているのは次のうちどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "Copilotを自動更新するため"
        },
        {
          "id": "B",
          "text": "特定のファイルを除外するため"
        },
        {
          "id": "C",
          "text": "監査ログを収集するため"
        },
        {
          "id": "D",
          "text": "組織メンバーから使用状況メトリクスを収集するため"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "GitHub Copilot提供了Metrics API（或称为使用情况API），其主要目的是**收集关于组织成员如何使用Copilot的聚合数据（例如，建议接受率、使用时长等）（D）**。它不用于自动更新软件（A）、配置内容排除（B）或收集审计日志（C，审计日志有单独的查看方式）。"
    },
    {
      "number": 25,
      "question": "リポジトリに対して調整された応答を生成するために、GitHub Copilotにコンテキストを提供するにはどうすればよいですか？",
      "choices": [
        {
          "id": "A",
          "text": "リポジトリ内に.github/copilot-instructions.mdという名前のファイルを作成する"
        },
        {
          "id": "B",
          "text": "プロジェクトの詳細を記載したメールをGitHubサポートに送信する"
        },
        {
          "id": "C",
          "text": "カスタム指示を含めるように.gitconfigファイルを変更する"
        },
        {
          "id": "D",
          "text": "必要なコンテキストを含むcopilot-instructionsという名前のGitHub issueをリポジトリ内に作成する"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "为整个项目提供自定义指令和背景信息的官方方法是：在仓库根目录的 **`.github` 文件夹下创建一个名为 `copilot-instructions.md` 的Markdown文件（A）**。Copilot会参考此文件中的内容来调整其在整个项目中的建议。"
    },
    {
      "number": 26,
      "question": "組織のメンバーにCopilotへのアクセス権を付与する方法として、以下でないものはどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "組織の設定で、選択したチームまたはユーザー、あるいは組織全体に対してGitHub Copilotを有効にします。"
        },
        {
          "id": "B",
          "text": "GitHubのREST APIを使用して、組織内のチームまたは特定のユーザーにGitHub Copilotへのアクセス権を付与できます。"
        },
        {
          "id": "C",
          "text": "組織のメンバーとして、アカウント設定から直接Copilotを有効にできます。"
        },
        {
          "id": "D",
          "text": "エンタープライズ設定で、選択した組織またはすべての組織に対してGitHub Copilotを有効にします。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "GitHub Copilot的席位分配和访问权限是**由组织或企业级别的管理员进行集中管理的**。普通组织成员**无法通过其个人账户设置自行启用或获取访问权限（C）**。其他选项（A、B、D）都是管理员可以执行的有效管理操作。"
    },
    {
      "number": 27,
      "question": "GitHub Copilot Chatのプロンプトにコンテキストとして追加できるものはどれですか？（3つ選択）",
      "choices": [
        {
          "id": "A",
          "text": "ターミナルコマンドの出力"
        },
        {
          "id": "B",
          "text": "テストの失敗"
        },
        {
          "id": "C",
          "text": "外部リポジトリ"
        },
        {
          "id": "D",
          "text": "シンボル"
        },
        {
          "id": "E",
          "text": "環境変数（PATHなど）"
        }
      ],
      "correctAnswer": [
        "A",
        "B",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "在Copilot Chat中，可以通过粘贴或引用以下内容来提供额外上下文：**终端命令的输出（A）、测试失败信息（B）、以及代码中的特定符号（如函数名、变量）（D）**。目前无法直接添加整个外部仓库（C）或系统环境变量（E）作为上下文。"
    },
    {
      "number": 28,
      "question": "GitHub Copilot Chatを外部ツールと統合するものは次のうちどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot インテグレーション"
        },
        {
          "id": "B",
          "text": "GitHub Copilot エクステンション"
        },
        {
          "id": "C",
          "text": "GitHub Copilot マーケットプレイス"
        },
        {
          "id": "D",
          "text": "GitHub Copilot オープン"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "扩展GitHub Copilot功能，尤其是与外部工具或服务集成，通常通过开发或安装 **“Extensions”（エクステンション/扩展）（B）** 来实现。例如，在VS Code中，可以安装其他扩展来增强Copilot的体验或连接其他服务。"
    },
    {
      "number": 29,
      "question": "次のうち、GitHub Copilotを最もよく説明しているオプションはどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "デバッグとエラーチェック機能を提供するコードエディターです。"
        },
        {
          "id": "B",
          "text": "コードを提案し、コードスニペットを補完することで開発者を支援するAIコーディングアシスタントです。"
        },
        {
          "id": "C",
          "text": "コードを自動的にテストし、本番環境にデプロイするツールです。"
        },
        {
          "id": "D",
          "text": "コードベースの変更を追跡および管理するバージョン管理システムです。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "GitHub Copilot的核心定位是一个 **“AI结对编程助手”** ，它通过分析上下文来**建议和自动补全代码（B）**。它本身不是代码编辑器（A）、自动化测试部署工具（C）或版本控制系统（D）。"
    },
    {
      "number": 30,
      "question": "GitHub Copilotを始める最も簡単な方法は何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "Visual Studio Codeなどの好みの環境にCopilot拡張機能をインストールします。"
        },
        {
          "id": "B",
          "text": "新しいパブリックGitHubリポジトリを作成し、Copilotがコードをスキャンして提案できるようにします。"
        },
        {
          "id": "C",
          "text": "Copilot Webサイトを使用し、提案を求める際にコードを貼り付けます。"
        },
        {
          "id": "D",
          "text": "GitHubサポートにアクセスをリクエストし、GitHub Copilotを使用する前に承認を待ちます。"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "开始使用GitHub Copilot最直接、标准的方式是：在您常用的集成开发环境（如Visual Studio Code）中**安装官方提供的Copilot扩展插件（A）**，然后登录您的GitHub账户并订阅即可。无需创建特殊仓库（B）、使用独立网站（C）或单独向支持申请（D，除非是企业采购流程）。"
    },
    {
      "number": 31,
      "question": "新しいコードを開発しているときに、GitHub Copilotは関連する提案を提供するために何を分析しますか？",
      "choices": [
        {
          "id": "A",
          "text": "現在のファイル内のコンテキストのみを分析します。"
        },
        {
          "id": "B",
          "text": "現在のファイルと関連ファイル内のコンテキストを分析します。"
        },
        {
          "id": "C",
          "text": "リポジトリ内のすべてのファイル内のコンテキストを分析します。"
        },
        {
          "id": "D",
          "text": "現在のコード行内のコンテキストのみを分析します。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot生成建议时，主要依据**当前编辑的文件内容**以及IDE可以提供的、在项目中打开的**邻近或相关文件（B）** 的内容作为关键上下文。它不会分析仓库中的所有文件（C），也并非仅限当前行（D）或当前文件（A）。"
    },
    {
      "number": 32,
      "question": "CLIにGitHub Copilot拡張機能をインストールするために使用するコマンドは何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "gh copilot setup"
        },
        {
          "id": "B",
          "text": "gh extension add copilot"
        },
        {
          "id": "C",
          "text": "gh copilot install"
        },
        {
          "id": "D",
          "text": "gh extension install github/gh-copilot"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "为GitHub CLI (`gh`) 安装Copilot扩展的标准命令是：**`gh extension install github/gh-copilot` (D)**。这是官方仓库的路径。`gh extension add copilot` (B) 可能是指向同一个仓库的别名，但最完整、标准的写法是D。"
    },
    {
      "number": 33,
      "question": "スマートアクションとは何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "スマートアクションは、リポジトリレベルと組織レベルで設定できる、組織内で一般的なコーディングタスクを支援するために設計された事前定義タスクです。"
        },
        {
          "id": "B",
          "text": "スマートアクションは、失敗したテストのデバッグと修正に使用される高度なGitHub Copilotモダリティです。"
        },
        {
          "id": "C",
          "text": "スマートアクションは、コードの説明、コードの修正、テストやドキュメントの生成など、GitHub Copilot Chatがプロンプトを作成する必要なく実行できる一般的で事前定義されたタスクです。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "“Smart Actions”（智能操作）是Copilot Chat中的功能，指的是**一系列预定义的、常见的一键式操作**，例如`/explain`（解释）、`/fix`（修复）、`/tests`（生成测试）等。用户无需手动编写完整的提示词，只需触发这些操作即可快速获得相应帮助（C）。它们并非仅限于组织内部配置（A）或专门用于调试测试（B）。"
    },
    {
      "number": 34,
      "question": "GitHub Copilotの「/tests」スラッシュコマンドの主な目的は何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "既存のテストファイルからのコンテキストを利用可能な場合、現在開いているファイルに対して単体テストのスイートを生成します。"
        },
        {
          "id": "B",
          "text": "新しいテストを生成することなく、プロジェクト内のすべての既存の単体テストを実行します。"
        },
        {
          "id": "C",
          "text": "新しく開始するために、すべての既存のテストファイルを永久に削除します。"
        },
        {
          "id": "D",
          "text": "新しいテストを作成せずに、既存のテストファイルの構文のみを検証します。"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "`/tests` 命令的核心作用是**为用户选中的代码段（通常是当前文件或选中的函数）自动生成单元测试（A）**。它会参考项目中现有的测试模式和结构。它不会运行测试（B）、删除文件（C）或仅验证语法（D）。"
    },
    {
      "number": 35,
      "question": "GitHub CopilotのCLIコマンド機能について正しく説明しているのはどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "「gh copilot explain」コマンドは、説明を表示せずにシステムファイルを変更します。"
        },
        {
          "id": "B",
          "text": "「gh copilot suggest」を使用する場合、コマンドはユーザーの確認なしに自動的に実行されます。"
        },
        {
          "id": "C",
          "text": "ユーザーは「gh copilot explain」を使用してコマンドの説明を、「gh copilot suggest」を使用してコマンドの提案を取得できます。"
        },
        {
          "id": "D",
          "text": "提案されたコマンドは、最初にクリップボードにコピーされることなく直接実行されます。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "GitHub Copilot CLI 提供了 `gh copilot explain` 命令来解释给定的命令，以及 `gh copilot suggest` 命令来基于自然语言描述生成命令建议（C）。它不会自动执行命令（B、D），也不会静默修改系统文件（A），通常需要用户确认或复制建议。"
    },
    {
      "number": 36,
      "question": "GitHub CopilotおよびGitHub Copilot Chatで利用可能な機能はどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "コード行補完、インラインチャット、チャットビュー、スマートアクション、コードリサーチ"
        },
        {
          "id": "B",
          "text": "コード行補完、インラインチャット、コードコンテナ、クイックチャット"
        },
        {
          "id": "C",
          "text": "コード行補完、インラインチャット、チャットビュー、クイックチャット、スマートアクション"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "GitHub Copilot 的核心功能集通常包括：**代码行补全（Inline Completions）、集成在编辑器中的内联聊天（Inline Chat）、独立的聊天面板（Chat View）、快速提问（Quick Chat）以及智能操作（Smart Actions）（C）**。选项A中的“代码研究”和选项B中的“代码容器”不是标准功能术语。"
    },
    {
      "number": 37,
      "question": "GitHub Copilotを使用する際に、エイリアスは何に使用されますか？",
      "choices": [
        {
          "id": "A",
          "text": "エイリアスを使用すると、GitHubがプルリクエストをレビューおよび作成できるようになります。"
        },
        {
          "id": "B",
          "text": "エイリアスを使用すると、GitのコミットでGitHub Copilotが変更を作成したことを示すことができます。"
        },
        {
          "id": "C",
          "text": "エイリアスを使用すると、GitHub Copilot CLIがコマンドラインでコマンドを自動的に実行できるようになります。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "在使用 GitHub Copilot 时，别名的核心用途是为 Copilot 的命令行工具（Copilot CLI）提供快捷命令，以提升在终端中的工作效率。"
    },
    {
      "number": 38,
      "question": "GitHub Copilotのプロキシサービスがプロンプトを処理するときにどのようなステップが発生しますか？",
      "choices": [
        {
          "id": "A",
          "text": "サンドボックス環境での自動コードコンパイルと実行"
        },
        {
          "id": "B",
          "text": "有害な言語のテスト、関連性チェック、プロンプトハッキングの試みの検出"
        },
        {
          "id": "C",
          "text": "参照チェックのための公開リポジトリへの直接送信"
        },
        {
          "id": "D",
          "text": "複数のプログラミング言語への翻訳と構文検証"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "代理服务在将用户提示发送给核心模型之前，会进行一系列**安全和内容过滤检查**，通常包括：**检测和过滤有害或不适当的内容（毒性语言）、检查提示的相关性、以及防范可能的提示词注入攻击（B）**。它不会在沙箱中编译执行代码（A）、直接向公共仓库发送请求（C）或进行代码翻译（D）。"
    }
  ]
};
