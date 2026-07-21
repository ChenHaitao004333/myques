// 自动生成的JS文件 - questions-03.jsonより変換
var questionsData03 = {
  "title": "模拟试题 03",
  "questions": [
    {
      "number": 1,
      "question": "GitHub Mobile で GitHub Copilot Chat を使用しているときに、GitHub Copilot Chat に関するフィードバックを共有する最適な方法は何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "Copilot チャット インターフェースで絵文字を使用します。"
        },
        {
          "id": "B",
          "text": "GitHub ウェブサイトのフィードバック セクション。"
        },
        {
          "id": "C",
          "text": "GitHub の公式 X (Twitter) アカウントにツイートする。"
        },
        {
          "id": "D",
          "text": "GitHub モバイル アプリの設定メニュー。"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "在GitHub Mobile应用中使用Copilot Chat时，最直接、最符合上下文的反馈方式就是在**聊天界面内直接使用表情符号（A）**。这是官方设计的内置反馈路径，能确保反馈与具体对话关联。其他选项如网站反馈、社交媒体或通用设置菜单，都不是在移动应用聊天场景下的“最適な”（最佳）方法。"
    },
    {
      "number": 2,
      "question": "Azure DevOps 組織は、GitHub Enterprise ライセンスを必要とせずにどの GitHub Copilot プランを使用できますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot 個人"
        },
        {
          "id": "B",
          "text": "GitHub Copilot エンタープライズ"
        },
        {
          "id": "C",
          "text": "Azure DevOps 用の GitHub Copilot"
        },
        {
          "id": "D",
          "text": "副操縦士チーム"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "对于使用Azure DevOps的组织，可以选择 **“GitHub Copilot for Azure DevOps”（C）** 这一特定计划。该计划**独立于GitHub Enterprise许可证体系**，专门为Azure DevOps环境设计和授权，因此可以在不拥有GitHub Enterprise许可的情况下使用。"
    },
    {
      "number": 3,
      "question": "プロキシ サービスはどこでホストされていますか？",
      "choices": [
        {
          "id": "A",
          "text": "セルフホスト"
        },
        {
          "id": "B",
          "text": "アマゾン ウェブ サービス"
        },
        {
          "id": "C",
          "text": "マイクロソフト アジュール"
        },
        {
          "id": "D",
          "text": "Google Cloud Platform"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "作为微软旗下的服务，GitHub Copilot的后端基础设施（包括处理提示词的代理服务）托管在 **Microsoft Azure（C）** 云平台上。"
    },
    {
      "number": 4,
      "question": "次のどれがロールプロンプトを説明していますか？",
      "choices": [
        {
          "id": "A",
          "text": "より良い提案を得るために、あなたの役割をプロンプトで説明する"
        },
        {
          "id": "B",
          "text": "GitHub Copilot にどのような口調で応答するかを指定します"
        },
        {
          "id": "C",
          "text": "GitHub Copilot に提案の役割を説明するよう促す"
        },
        {
          "id": "D",
          "text": "GitHub Copilot に、使用したいデータの形式の複数の例を与える"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "“角色提示”（Role Prompting）是一种Prompt Engineering技巧，指的是在给Copilot的指令中**明确指定一个角色或视角**，例如“你是一名资深Python后端工程师”或“请以安全审计员的身份检查这段代码”。通过设定角色，可以引导模型从该角色的专业知识出发，生成更贴切、专业的回答。选项A准确地描述了这一做法。"
    },
    {
      "number": 5,
      "question": "GitHub Copilot の重複検出フィルターの主な目的は何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "ユーザーが生成したコードをプライベート リポジトリと比較し、一致する可能性のあるものを探します。"
        },
        {
          "id": "B",
          "text": "管理者がカスタム基準に基づいて開発者に表示される提案を制御できるようにします。"
        },
        {
          "id": "C",
          "text": "コードの重複を防ぐコーディングのベストプラクティスに従うようにユーザーに促します。"
        },
        {
          "id": "D",
          "text": "GitHub 上の公開コード スニペットに一致する提案が約 150 文字含まれている場合に、その提案を検出してブロックします。"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "重复检测过滤器的主要目的是：当Copilot生成的代码与训练数据中的**公开代码片段匹配度超过一定阈值（例如150个字符）** 时，**对其进行检测并可以根据配置选择阻止输出（D）**，以帮助避免潜在的代码复用和许可问题。"
    },
    {
      "number": 6,
      "question": "メトリクス API から得られた洞察を、GitHub Copilot と組み合わせて開発プロセスを改善するためにどのように活用できますか？",
      "choices": [
        {
          "id": "A",
          "text": "リアルタイムのデバッグとエラー解決の統計。"
        },
        {
          "id": "B",
          "text": "GitHub Copilot が最も役立つコーディング言語の種類に関する洞察。"
        },
        {
          "id": "C",
          "text": "完全なプロジェクト ドキュメントの自動生成。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot の提案と手動コーディングの詳細な分析。"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "Metrics API提供的使用情况数据（如建议采纳率）可以与代码分析结合，用于**比较和评估Copilot生成的代码与手动编写代码在质量、模式上的差异（D）**，从而识别改进领域，优化开发流程。API本身不提供实时调试统计(A)或自动生成文档(C)。"
    },
    {
      "number": 7,
      "question": "GitHub Copilot でカスタムモデルを使用する利点は何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "レスポンスがより速く生成され、より早く表示される"
        },
        {
          "id": "B",
          "text": "応答ではリポジトリ内のプラクティスとパターンを使用します"
        },
        {
          "id": "C",
          "text": "応答には組織のLLMエンジンが使用されます"
        },
        {
          "id": "D",
          "text": "応答は正しいことが保証されます"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "自定义模型（通常是GitHub Copilot Enterprise的一项功能）的核心优势是能够**使用组织内部的私有代码库进行额外训练或微调**。这使得生成的建议能更好地**适应组织特有的编码风格、框架、库和业务逻辑模式（B）**，从而显著提高相关性和准确性。"
    },
    {
      "number": 8,
      "question": "GitHub Copilot Business サブスクリプションの詳細を変更するために使用される REST API エンドポイントはどれですか？ (それぞれの正解はソリューションの一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "組織の Copilot サブスクリプションにチームを追加する"
        },
        {
          "id": "B",
          "text": "サブスクリプション層をアップグレードまたはダウングレードする"
        },
        {
          "id": "C",
          "text": "GitHub 組織間で Copilot シートの割り当てを移行する"
        },
        {
          "id": "D",
          "text": "GitHub リポジトリのサイズに基づいて Copilot シートを再割り当てする"
        },
        {
          "id": "E",
          "text": "組織の Copilot サブスクリプションからチームを削除します"
        }
      ],
      "correctAnswer": [
        "A",
        "E"
      ],
      "isMultipleChoice": true,
      "explanation": "管理Copilot Business订阅的REST API，其典型功能包括**在订阅中添加团队（A）** 以及**从订阅中移除团队（E）**，这属于对订阅席位分配的日常管理。升级降级(B)、跨组织迁移(C)或基于仓库大小分配(D)通常不是标准API端点的功能。"
    },
    {
      "number": 9,
      "question": "GitHub Copilot Chat によるコード機能の説明や改善提案を頼りにする場合、重要な考慮事項は何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "説明はユーザーからのフィードバックに基づいて動的に更新されます。"
        },
        {
          "id": "B",
          "text": "生成された出力の正確性と完全性を確認し、検証します。"
        },
        {
          "id": "C",
          "text": "GitHub Copilot Chat は説明を生成するために静的データベースを使用します。"
        },
        {
          "id": "D",
          "text": "説明は主にユーザー提供のドキュメントに基づいています。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "无论Copilot Chat生成的是代码、解释还是建议，都必须牢记其本质是基于模式预测的AI，并非权威来源。因此，最关键的原则是**对其所有输出进行人工审查和验证（B）**，以确保准确性、安全性和适用性。其他选项要么描述不准确，要么不是最核心的考量。"
    },
    {
      "number": 10,
      "question": "GitHub Copilot Chat をツールとして使用する目的を最もよく表すシナリオは次のどれですか。",
      "choices": [
        {
          "id": "A",
          "text": "開発者がコードを生成するための完全な代替品です。"
        },
        {
          "id": "B",
          "text": "提案は提供するものの、人間の判断に依存する生産性向上ツール。"
        },
        {
          "id": "C",
          "text": "追加の入力や監視を必要としないソフトウェア開発ソリューション。"
        },
        {
          "id": "D",
          "text": "デバッグとエラー修正専用に設計されたツール。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot Chat被设计为一个 **“副驾驶” (Copilot)** ，其目的是**增强开发者的能力，而不是取代他们**。因此，将其视为**提供建议但依赖人类判断的生产力工具（B）** 是最准确的定位。选项A和C的描述是错误的，选项D则过于局限。"
    },
    {
      "number": 11,
      "question": "GitHub Copilot Business における組織監査ログの主な目的は何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "Copilotが提案したコード行数を追跡する"
        },
        {
          "id": "B",
          "text": "組織内でソフトウェアライセンスを割り当てる"
        },
        {
          "id": "C",
          "text": "リポジトリ間のコード競合を監視する"
        },
        {
          "id": "D",
          "text": "組織内の管理者の活動とアクションを監視する"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "组织审计日志的核心目的是提供**安全性和合规性记录**，用于跟踪**管理员或其他授权用户在组织层面执行的关键操作**，例如更改设置、管理成员、配置策略等（D）。它不用于追踪代码行数(A)、代码冲突(C)或分配许可证(B)这类具体开发或资源管理细节。"
    },
    {
      "number": 12,
      "question": "AI 開発中にバイアスを最小限に抑えるにはどうすればよいでしょうか？",
      "choices": [
        {
          "id": "A",
          "text": "計算効率と速度を向上します。"
        },
        {
          "id": "B",
          "text": "データの正確さに重点を置きます。"
        },
        {
          "id": "C",
          "text": "トレーニング用に大量のデータを収集します。"
        },
        {
          "id": "D",
          "text": "多様なデータ、公平性の指標、および人間による監視を使用します。"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "减少AI偏见需要一个系统性的方法，而非单一措施。最全面的策略是**使用多样化和代表性的训练数据、在训练和评估中采用公平性指标进行度量、并引入人类专家进行监督和审查（D）**。仅关注数据准确性(B)或数量(C)不足以解决偏见问题，可能反而放大偏见。提高计算效率(A)与减少偏见无直接关系。"
    },
    {
      "number": 13,
      "question": "ユーザーは IDE を使用して GitHub Copilot Chat に関するフィードバックをどのように提供できますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHubウェブサイトのフィードバックフォームに記入する"
        },
        {
          "id": "B",
          "text": "サポートチームに直接メールを送信する"
        },
        {
          "id": "C",
          "text": "GitHubフォーラムに投稿する"
        },
        {
          "id": "D",
          "text": "Copilotチャットパネルの「フィードバックを共有」ボタンから"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "在IDE中提供Copilot Chat反馈的最直接、最符合上下文的渠道是使用**Chat界面内通常提供的“分享反馈”（Share Feedback）按钮或类似选项（D）**。这能确保反馈与具体的对话关联。其他选项虽然也是反馈途径，但不是在IDE环境下的“最直接”方法。"
    },
    {
      "number": 14,
      "question": "品質向上のためにコードをリファクタリングする際に GitHub Copilot Chat をガイドするために使用できるプロンプトは次のどれですか？ (それぞれの正解はソリューションの一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "「この関数の読みやすさを改善する方法を教えてください。」"
        },
        {
          "id": "B",
          "text": "「このコードセグメントの保守性を高める方法を提案してください。」"
        },
        {
          "id": "C",
          "text": "「最新のコーディング標準を満たすようにアプリケーションをリファクタリングします。」"
        },
        {
          "id": "D",
          "text": "「将来のコーディングトレンドを予測し、それに応じてコードベースを更新します。」"
        }
      ],
      "correctAnswer": [
        "A",
        "B"
      ],
      "isMultipleChoice": true,
      "explanation": "有效的重构提示需要**具体且可操作**，最好聚焦于代码质量的某个具体维度（如可读性、可维护性）。选项A（改善可读性）和B（提高可维护性）都符合这一要求。选项C（满足最新标准）和D（预测未来趋势）过于宽泛和模糊，Copilot难以给出具体、有针对性的建议。"
    },
    {
      "number": 15,
      "question": "GitHub Copilot Business の使用を特定のリポジトリに制限するための組織全体のポリシーを確立する方法を正しく示しているのは、次の手順のどれですか。",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Actions 設定を通じてポリシーを適用する"
        },
        {
          "id": "B",
          "text": "各リポジトリにcopilot.policyファイルを作成する"
        },
        {
          "id": "C",
          "text": "組織設定でポリシーを構成する"
        },
        {
          "id": "D",
          "text": ".githubリポジトリにcopilot.policyを作成します。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "GitHub Copilot Business的管理策略（包括对特定仓库的限制）是**在GitHub组织（Organization）级别的设置中进行集中配置的（C）**。这是企业级功能的典型管理方式，可以实现统一、全局的控制。不存在需要通过文件（B、D）或GitHub Actions（A）来配置Copilot Business策略的标准方法。"
    },
    {
      "number": 16,
      "question": "IDE の GitHub Copilot はプロンプトのコンテキストを決定するために何を使用しますか？",
      "choices": [
        {
          "id": "A",
          "text": "開いているタブ、カーソルの位置、選択されたコードなどの IDE からの情報。"
        },
        {
          "id": "B",
          "text": "現在のリポジトリ内のすべてのコードと、git サブモジュール。"
        },
        {
          "id": "C",
          "text": "IDE で開いているタブとターミナルの現在のフォルダー。"
        },
        {
          "id": "D",
          "text": "現在の IDE で表示されるすべてのコード。"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot主要依赖**即时且紧密相关的上下文**来生成建议，这包括：当前编辑的**文件内容**、**光标位置**、**已打开的标签页**以及用户可能**选中的代码片段（A）**。它不会自动扫描整个项目目录（B、C、D）来构建上下文，那样会产生大量无关信息，降低建议质量。"
    },
    {
      "number": 17,
      "question": "サポートされている GitHub Copilot プラグインを備えた IDE を使用する場合、IDE 内からどのチャット機能にアクセスできますか？ (それぞれの正解は解決策の一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "コードを説明し、改善を提案する"
        },
        {
          "id": "B",
          "text": "ユニットテストを生成する"
        },
        {
          "id": "C",
          "text": "コーディングタスクを計画する"
        },
        {
          "id": "D",
          "text": "リリースとコミットについて知る"
        }
      ],
      "correctAnswer": [
        "A",
        "B"
      ],
      "isMultipleChoice": true,
      "explanation": "集成在IDE中的Copilot Chat，其核心功能围绕**代码的生成、解释和优化**。因此，**解释代码并建议改进（A）** 和**生成单元测试（B）** 是其典型功能。而“规划编码任务”（C）和“了解发布和提交”（D）更多涉及项目管理和版本控制，不是Chat的核心交互功能。"
    },
    {
      "number": 18,
      "question": "GitHub Copilot はどのようにして一致するコードを識別し、公開コードが適切に処理またはブロックされるようにするのでしょうか？ (それぞれの正解は解決策の一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "プライベートリポジトリでのみトレーニングされた機械学習モデルを使用する"
        },
        {
          "id": "B",
          "text": "将来の提案のためにユーザー固有のプライベートリポジトリデータを確認して保存する"
        },
        {
          "id": "C",
          "text": "公開リポジトリのコードに一致する候補を除外する"
        },
        {
          "id": "D",
          "text": "公開コードからの逐語的なスニペットの提案を検出し回避するための安全策を実装する"
        }
      ],
      "correctAnswer": [
        "C",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "Copilot处理公共代码匹配的核心机制是：1. **检测和过滤**：通过过滤器检测与公共代码库中代码高度相似的候选建议，并根据配置进行**排除（C）**。2. **实施安全措施**：实现一系列安全防护，旨在**检测和避免建议逐字照搬的公共代码片段（D）**。它并非仅用私有数据训练（A），也不会为训练目的而存储用户私有数据（B）。"
    },
    {
      "number": 19,
      "question": "GitHub Copilot は、コンテンツ除外を使用して除外されたコンテンツをいつ引き続き使用できますか？",
      "choices": [
        {
          "id": "A",
          "text": "ユーザーが @workspace でプロンプトを出したとき。"
        },
        {
          "id": "B",
          "text": "リポジトリ レベルの設定でユーザーによる上書きが許可されている場合。"
        },
        {
          "id": "C",
          "text": "除外されたファイルの内容が、関数呼び出しなど、除外されていないコード内で参照されている場合。"
        },
        {
          "id": "D",
          "text": "コンテンツの除外がエンタープライズ レベルで構成され、組織レベルで上書きされる場合。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "“内容排除”策略阻止Copilot直接参考特定文件。但是，如果被排除文件的**内容（如函数名、变量）在未被排除的其他代码中被显式引用或调用（C）**，那么Copilot在理解那段未被排除的代码上下文时，可能仍然会间接“感知”到被排除内容的存在。这是一种潜在的上下文泄露边界情况。"
    },
    {
      "number": 20,
      "question": "ゼロショットプロンプトとは何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot にプロンプ​​トとして質問のみを与え、例を与えない"
        },
        {
          "id": "B",
          "text": "GitHub Copilotに解決したい問題の例を与える"
        },
        {
          "id": "C",
          "text": "GitHub Copilotに正しい答えだけを表示するように指示する"
        },
        {
          "id": "D",
          "text": "GitHub Copilot に使用したいアルゴリズムと結果の例を示す"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "“ゼロショットプロンプト”（零样本提示）是一种Prompt工程技术，指的是在向模型提出请求时，**不提供任何具体的输入-输出示例**，仅依靠模型已有的知识和指令来完成任务（A）。这考验了模型的泛化能力。"
    },
    {
      "number": 21,
      "question": "/tests スラッシュ コマンドは開発者をどのように支援しますか？",
      "choices": [
        {
          "id": "A",
          "text": "詳細なテストドキュメントを構築します。"
        },
        {
          "id": "B",
          "text": "選択したコードの単体テストを作成します。"
        },
        {
          "id": "C",
          "text": "外部テスト フレームワークと統合します。"
        },
        {
          "id": "D",
          "text": "テストケースを実行してコードの問題を見つけます。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "`/tests` 斜杠命令是Copilot Chat中的一个专用功能，其核心作用是**为用户选中的代码段（如一个函数）自动生成单元测试（B）**。它不会创建详细的测试文档(A)，也不是与外部框架集成(C)或执行测试(D)的工具。"
    },
    {
      "number": 22,
      "question": "GitHub Copilot Chat は既存のコードベースを理解するのにどのように役立ちますか？",
      "choices": [
        {
          "id": "A",
          "text": "コード リンターとフォーマッタを実行します。"
        },
        {
          "id": "B",
          "text": "コード構造の視覚的な図を提供します。"
        },
        {
          "id": "C",
          "text": "コードに関する質問に答え、説明を生成します。"
        },
        {
          "id": "D",
          "text": "コードを自動的にリファクタリングして読みやすさを向上します。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot Chat在理解现有代码库方面的主要作用是作为一个**交互式问答和解释工具**。开发者可以选中一段代码或指向一个函数，然后向Chat提问，例如“这段代码是做什么的？”，Chat会**基于代码上下文生成解释性回答（C）**。它本身不运行代码检查工具（A）、不生成可视化图表（B），自动重构（D）也需在开发者主导下进行。"
    },
    {
      "number": 23,
      "question": "GitHub Copilot は、プログラミング言語の非推奨の機能や構文を含むコードの提案を通常どのように処理しますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot は、提案内の非推奨の機能を最新バージョンに自動的に更新します。"
        },
        {
          "id": "B",
          "text": "GitHub Copilot は、トレーニング データに非推奨の構文または機能が存在する場合、それらを提案することがあります。"
        },
        {
          "id": "C",
          "text": "GitHub Copilot は、現在の標準の使用を促進するために、非推奨の要素を常に除外します。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot は、コンパイル エラーを回避するために、非推奨の機能に関するすべてのプロンプトを拒否します。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot根据其训练数据中的模式生成建议。如果**某些已弃用（deprecated）的语法或API在其训练数据（大量历史公开代码）中非常普遍**，那么Copilot很可能会继续建议它们（B）。它不具备自动过滤（C）、更新（A）或拒绝（D）已弃用内容的能力。"
    },
    {
      "number": 24,
      "question": "公平性の概念を AI ツールの操作プロセスにどのように統合できるでしょうか？",
      "choices": [
        {
          "id": "A",
          "text": "アクセシビリティに重点を置くことで公平性が確保されます。"
        },
        {
          "id": "B",
          "text": "トレーニング用の大規模なデータセットの収集に重点を置くことで、公平性が確保されます。"
        },
        {
          "id": "C",
          "text": "AI ツールのパフォーマンスを定期的に監視することで、出力の公平性が確保されます。"
        },
        {
          "id": "D",
          "text": "AI データとアルゴリズムを偏りのない状態にトレーニングすることで、公平性が確保されます。"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "确保AI公平性是一个系统性的工程，其基础在于**从源头减少偏见**，即通过精心设计的数据集和算法训练，确保**数据和算法本身不受偏见影响（D）**。仅关注数据规模(B)、监控性能(C)或可访问性(A)虽然重要，但不足以确保公平性的核心理念被“整合”到操作过程中。"
    },
    {
      "number": 25,
      "question": "GitHub Copilot は、新しいプログラミング言語を学ぶ際に、どのようにスムーズな学習体験を促進しますか？ (それぞれの正解は解決策の一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot Chat は、対象となるプログラミング言語での一般的なコーディング タスクと課題に関するガイダンスとサポートを提供できます。"
        },
        {
          "id": "B",
          "text": "GitHub Copilot の /understand コマンドは、GitHub Copilot が対象のプログラミング言語で記述されたコードを理解するのに役立ちます。"
        },
        {
          "id": "C",
          "text": "GitHub Copilot は、組織のドキュメントからコンテキストに応じたコード提案と回答ソースを提供できます。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot はコメントをコードに変換し、新しいプログラミング言語の構文とニュアンスを把握できます。"
        }
      ],
      "correctAnswer": [
        "A",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "对于学习新语言，Copilot的帮助体现在：1. **交互式指导**：通过Chat**回答问题、提供常见任务示例和指南（A）**。2. **从注释生成代码**：通过将自然语言注释转换为实际代码，帮助开发者**直观地看到新语言的语法结构和惯用法（D）**。`/understand`命令（B）不是标准命令。选项C描述的是知识库功能，并非学习新语言的主要通用方式。"
    },
    {
      "number": 26,
      "question": "GitHub Copilot は、開発者がコードのドキュメントを作成するのにどのように役立ちますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot はドキュメントやコメントの作成を支援できません。"
        },
        {
          "id": "B",
          "text": "GitHub Copilot は、完全かつ詳細なドキュメントを自動的に生成できます。"
        },
        {
          "id": "C",
          "text": "GitHub Copilot は、コードの機能に基づいて要約や説明を提案できます。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot は、マークダウン形式でのみコンテンツを生成できます。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot在文档编写方面的主要辅助能力是：**基于现有代码的功能和逻辑，生成内联注释、函数/方法描述或简单的文档字符串和摘要（C）**。它不能自动生成需要深入业务理解的“完整详细文档”（B），也不仅限于Markdown格式（D）。"
    },
    {
      "number": 27,
      "question": "GitHub Copilot が公開されているコード スニペットを提案しないようにするために、組織レベルで設定できる GitHub Copilot 機能は何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "IDE 内の GitHub Copilot チャット"
        },
        {
          "id": "B",
          "text": "GitHub モバイルの GitHub Copilot チャット"
        },
        {
          "id": "C",
          "text": "GitHub Copilot 重複検出フィルター"
        },
        {
          "id": "D",
          "text": "Bing への GitHub Copilot アクセス"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "可以在组织层面配置 **“重複検出フィルター”（代码相似性检测过滤器）（C）**。启用后，该过滤器会检测并阻止Copilot生成与公共代码库中代码高度相似的片段，从而减少建议公开代码片段的风险。其他选项不具备此配置能力。"
    },
    {
      "number": 28,
      "question": "コンテンツの除外により GitHub Copilot が提案を返していないかどうかはどこで確認できますか？",
      "choices": [
        {
          "id": "A",
          "text": "エディターのステータスバーのGitHub Copilotアイコンにメッセージが表示されます。"
        },
        {
          "id": "B",
          "text": "GitHub Copilotは、ユーザー設定のGitHub.comにログオンします。"
        },
        {
          "id": "C",
          "text": "コード提案ウィンドウに警告メッセージが表示されます"
        },
        {
          "id": "D",
          "text": "IDE の GitHub Copilot エラー パネル"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "当文件因内容排除设置而无法获得代码建议时，最直接的用户端反馈通常在**编辑器状态栏的GitHub Copilot图标上会显示一个提示消息（A）**（例如，一个带感叹号或叉号的小图标）。这比去网站查看日志（B）或期望在代码建议弹窗（C）或错误面板（D）中看到警告更为即时和直观。"
    },
    {
      "number": 29,
      "question": "GitHub Copilot Chat が最も効果を発揮する適切なユースケースを特定してください。(それぞれの正解はソリューションの一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "ビジネス要件ドキュメントから技術要件仕様を作成する"
        },
        {
          "id": "B",
          "text": "レガシー COBOL コードを説明し、そのコードを Python などの別の言語に翻訳します。"
        },
        {
          "id": "C",
          "text": "新しく開発されたPythonコードの単体テストシナリオの作成"
        },
        {
          "id": "D",
          "text": "Webアプリケーションのエンドツーエンドのパフォーマンステストシナリオの作成"
        }
      ],
      "correctAnswer": [
        "B",
        "C"
      ],
      "isMultipleChoice": true,
      "explanation": "GitHub Copilot Chat 在理解和生成**代码相关**内容方面最为擅长。因此，**解释遗留代码并进行语言转换（B）** 以及**为新代码生成单元测试（C）** 都是其核心优势范围内的典型用例。从业务文档生成技术规格（A）和创建端到端性能测试（D）通常需要更深度的业务分析或特定领域知识，超出了Chat的核心能力范围。"
    },
    {
      "number": 30,
      "question": "GitHub Copilot Chat は、コーディングの質問に答える際に、トレーニング データと外部ソースをどのように活用して応答を生成するのでしょうか？",
      "choices": [
        {
          "id": "A",
          "text": "応答を生成するために、主にモデルのトレーニング データに依存します。"
        },
        {
          "id": "B",
          "text": "応答を生成するために主に Bing の検索結果を使用します。"
        },
        {
          "id": "C",
          "text": "トレーニング データ セット、ユーザー リポジトリ内のコード、Bing などの外部ソースを組み合わせて応答を生成します。"
        },
        {
          "id": "D",
          "text": "応答を生成するために、ユーザーが提供するドキュメントのみを使用します。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot Chat（特别是启用“联网”功能时）的回答是**综合性的**。它会结合：1. 其基础训练数据中的通用编程知识；2. 当前IDE和项目中打开的文件的上下文（用户代码）；3. 在允许的情况下，通过Bing等外部源获取的最新信息或文档。选项C最全面地描述了这种混合数据源的利用方式。"
    },
    {
      "number": 31,
      "question": "GitHub Copilot の毒性フィルターによってフラグが付けられる可能性のあるプロンプトやコードスニペットの種類は何ですか？ (それぞれの正解は解決策の一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "ヘイトスピーチまたは差別的言語（例：人種差別的中傷、不快なステレオタイプ）"
        },
        {
          "id": "B",
          "text": "性的に示唆的または露骨な内容"
        },
        {
          "id": "C",
          "text": "論理エラーを含む、または予期しない結果を生成するコード"
        },
        {
          "id": "D",
          "text": "強い意見や批判を含むコードコメント"
        }
      ],
      "correctAnswer": [
        "A",
        "B"
      ],
      "isMultipleChoice": true,
      "explanation": "GitHub Copilot内置了安全过滤器，用于检测和阻止可能有害或不适当的内容生成。其“毒性过滤器”主要匹配两类输入：一是**仇恨言论或歧视性语言（A）**；二是**性暗示或露骨内容（B）**。选项C（逻辑错误的代码）和D（带强烈意见的评论）不属于安全过滤器针对的“有害内容”范畴。"
    },
    {
      "number": 32,
      "question": "コード提案について正しいのは次のうちどれですか？ (それぞれの正解は解決策の一部を示しています。2つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "コード提案は既知のセキュリティ脆弱性を露呈しないことが保証されています"
        },
        {
          "id": "B",
          "text": "キーボードショートカットを使用して、候補の次の単語を受け入れることができます。"
        },
        {
          "id": "C",
          "text": "コード提案は1行の提案に限定されます"
        },
        {
          "id": "D",
          "text": "コード提案は常に変更なしでコンパイルまたは実行されます"
        },
        {
          "id": "E",
          "text": "代替コードの提案を新しいタブに表示できます"
        }
      ],
      "correctAnswer": [
        "B",
        "E"
      ],
      "isMultipleChoice": true,
      "explanation": "选项B正确：通常可以使用Tab或特定的快捷键来逐步接受建议的单词或整行。选项E正确：在许多IDE中，当Copilot提供多个建议时，可以展开或在新标签页查看替代方案。选项A错误：没有安全保证。选项C错误：Copilot可以提供多行甚至整个函数的建议。选项D错误：生成的代码可能需要修改才能运行。"
    },
    {
      "number": 33,
      "question": "統計分析を伴うコードを生成するために GitHub Copilot を利用する場合、開発者はどのような点を考慮すべきでしょうか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot は、結果の統計的有意性を独自に検証できます。"
        },
        {
          "id": "B",
          "text": "GitHub Copilot の提案は統計的な傾向に基づいており、特定のデータセットに必ずしも正確に適用されるとは限りません。"
        },
        {
          "id": "C",
          "text": "GitHub Copilot は、ユーザーの初期コードで見つかった統計エラーを自動的に修正します。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot は、これまで文書化されていなかった新しい統計手法を設計できます。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot可以生成语法正确的统计代码，但它**不具备统计学领域的专业知识**。其建议基于训练数据中的常见模式（“统计趋势”），可能**不适用于特定数据集的分布、假设或研究问题（B）**。开发者必须负责选择正确的统计方法并验证结果。它不能独立验证显著性(A)、自动修正错误(C)或设计新方法(D)。"
    },
    {
      "number": 34,
      "question": "GitHub Copilot へのプロンプトを改善するために使用できる 2 つの手法は何ですか？ (2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "具体的な成功基準を提供する"
        },
        {
          "id": "B",
          "text": "利用されたファイルに関するすべての情報を提供します"
        },
        {
          "id": "C",
          "text": "レスポンスを得るためにコンテンツをどこから取得するかについての洞察を提供する"
        },
        {
          "id": "D",
          "text": "サポートドキュメントへのリンクを提供する"
        }
      ],
      "correctAnswer": [
        "A",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "改进Prompt（提示词）的有效方法包括：**提供具体、可衡量的成功标准（A）**，以及**附上相关的支持文档链接（D）**，为Copilot提供更丰富的背景信息以生成更准确的建议。提供文件中的所有信息(B)可能导致信息过载。选项C的表述模糊，不是标准提示词工程技巧。"
    },
    {
      "number": 35,
      "question": "ある企業は現在、Bitbucketにコードを保存しており、GitHub Copilotの利用を考えています。自社のIDプロバイダー（Oktaなど）でユーザーを管理するには、どのGitHub Copilotプランが最も費用対効果が高いでしょうか？",
      "choices": [
        {
          "id": "A",
          "text": "GHE以外のお客様向けのGitHub Copilot Business"
        },
        {
          "id": "B",
          "text": "GitHub Copilot 個人"
        },
        {
          "id": "C",
          "text": "GitHub Copilot エンタープライズ"
        },
        {
          "id": "D",
          "text": "GitHub Copilot チーム"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "题目关键点是：1. 代码在BitBucket（非GitHub）。2. 希望通过IdP（如Okta）管理用户。虽然“GitHub Copilot Business for non-GHE customers”（A）也支持IdP集成，但**GitHub Copilot Enterprise（C）** 是功能最全面、专为大型企业设计的计划，它必然包含通过企业IdP进行高级用户管理和单点登录的功能，并且是针对此类企业需求的“最费用対効果が高い”的完整解决方案。个人版（B）无此功能，Teams（D）可能不指代明确产品层级。"
    },
    {
      "number": 36,
      "question": "どの GitHub Copilot プランでプロンプトと提案の収集が可能になりますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot 個人"
        },
        {
          "id": "B",
          "text": "GitHub Copilot ビジネス"
        },
        {
          "id": "C",
          "text": "GitHub Copilot エンタープライズ"
        },
        {
          "id": "D",
          "text": "GitHub Copilot コードスペース"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "**GitHub Copilot Enterprise（C）** 是为大型组织设计的版本，额外提供了组织级别的使用情况分析和见解功能，其中就包括对“提示和提案”的汇总和收集，以帮助管理者了解和优化使用方式。"
    },
    {
      "number": 37,
      "question": "GitHub Copilot ナレッジベースについて正しいのは次のうちどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "すべてのリポジトリがインデックス化されています"
        },
        {
          "id": "B",
          "text": "インデックスは静的です"
        },
        {
          "id": "C",
          "text": "これはエンタープライズ機能です"
        },
        {
          "id": "D",
          "text": "すべてのファイルタイプがインデックス化されます"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "**GitHub Copilot Knowledge Bases（知识库）是GitHub Copilot Enterprise计划的一项专属高级功能（C）**。它通常需要手动配置要索引的仓库和文件类型，并非自动索引所有仓库（A）或所有文件（D），索引也可以是动态更新的（B错误）。"
    },
    {
      "number": 38,
      "question": "GitHub Copilot の LLM が応答を生成するときにコンテキストを取得するのは次のどれですか。",
      "choices": [
        {
          "id": "A",
          "text": "リポジトリへのコミット頻度"
        },
        {
          "id": "B",
          "text": "IDE におけるコードの構文強調表示スキーム"
        },
        {
          "id": "C",
          "text": "プロジェクト内の隣接または関連ファイル"
        },
        {
          "id": "D",
          "text": "IDE に統合されたバージョン管理システム"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot生成代码建议时，主要依据当前编辑的文件内容以及IDE可以提供的、在项目中打开的**邻近或相关文件（C）** 的内容作为关键上下文。提交频率(A)、语法高亮(B)或版本控制系统(D)不是其直接使用的上下文来源。"
    },
    {
      "number": 39,
      "question": "GitHub Copilot Chat はどのようにして機能が正しく動作することを保証しますか？",
      "choices": [
        {
          "id": "A",
          "text": "コードのコンテキストとセマンティクスに基づいてアサーションを提案します。"
        },
        {
          "id": "B",
          "text": "関数のすべてのテストを自動的に記述します。"
        },
        {
          "id": "C",
          "text": "関数の実装コードを記述します。"
        },
        {
          "id": "D",
          "text": "テストケースを実行してコードの正確性を検証します。"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot Chat无法“保证”函数正确运行，但它可以**辅助验证过程**。其方式是分析函数的代码和语义，然后**建议可能的断言（Assertions）或测试条件（A）**，帮助开发者思考并验证函数在各种边界情况下的行为。它不能自动编写所有测试(B)，也不能执行测试(D)。"
    },
    {
      "number": 40,
      "question": "GitHub Copilot Chat を使用してコード品質を向上させる場合に推奨されるプラクティスの 1 つは何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "複雑なタスクには Copilot を使用しないでください。"
        },
        {
          "id": "B",
          "text": "Copilot のインライン提案を無効にします。"
        },
        {
          "id": "C",
          "text": "Copilot によって提案されたコードを定期的にレビューし、リファクタリングします。"
        },
        {
          "id": "D",
          "text": "Copilot の提案を確認せずに、その提案のみに依存します。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "使用Copilot时的核心最佳实践是，始终将其视为助手，并对它生成的任何代码进行**仔细审查、测试和必要的重构（C）**，以确保代码质量。其他选项要么限制了工具的有效使用（A、B），要么是完全错误的使用方式（D）。"
    },
    {
      "number": 41,
      "question": "GitHub Copilot のどの料金プランで会社のナレッジベースにアクセスできますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot 個人"
        },
        {
          "id": "B",
          "text": "GitHub Copilot ビジネス"
        },
        {
          "id": "C",
          "text": "GitHub Copilot エンタープライズ"
        },
        {
          "id": "D",
          "text": "GitHub Copilot プロフェッショナル"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "访问公司内部知识库（用于提供基于组织私有文档的上下文建议）是 **GitHub Copilot Enterprise（C）** 计划的一项高级功能。个人版（A）和商业版（B）不包含此功能。"
    },
    {
      "number": 42,
      "question": "開発者はどのような方法で GitHub Copilot を使用してサンプルデータを生成することができますか？ (それぞれの正解はソリューションの一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot の機能を利用して、トレーニング データ内のパターンから架空の情報を作成します。"
        },
        {
          "id": "B",
          "text": "GitHub Copilot の機能を活用して、データ ストレージ サービスを独立して開始および管理します。"
        },
        {
          "id": "C",
          "text": "GitHub Copilot の機能を利用して、データベースに直接アクセスし、サンプル データを作成します。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot の提案を活用して、リポジトリ内の API ドキュメントに基づいてデータを作成します。"
        }
      ],
      "correctAnswer": [
        "A",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "Copilot可以基于学习到的模式生成**模拟的、结构化的示例数据（A）**，例如JSON对象、测试用的列表等。它还可以**参考项目中的API文档、类型定义或现有代码结构，来生成符合预期格式的示例数据（D）**。它不能独立启动服务（B）或直接访问外部数据库（C）。"
    },
    {
      "number": 43,
      "question": "GitHub Copilot で有効になっているパブリック コード フィルターを使用する場合、パブリック コードの一致を識別するプロセスは何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "公開コードを検出するために設計されたフィルターを使用してコード提案を実行する"
        },
        {
          "id": "B",
          "text": "機械学習を使用して、提案を公開コードと比較します。"
        },
        {
          "id": "C",
          "text": "書かれているコードのコンテキストと構造を分析する"
        },
        {
          "id": "D",
          "text": "ユーザーの閲覧履歴を確認して公開リポジトリを識別する"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "公开代码过滤器的工作机制是：在Copilot**生成代码建议后（运行时）**，将这些建议**通过一个专门检测与公共代码库匹配的过滤器进行处理（A）**。如果检测到匹配且配置为阻止，则阻止该建议输出。这不是一个持续的机器学习比较过程（B），也不是分析编写中代码的上下文（C），更不涉及用户浏览历史（D）。"
    },
    {
      "number": 44,
      "question": "GitHub Copilot は、ソフトウェア開発ライフサイクル (SDLC) の設計フェーズにどのように貢献できますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot は、完全なソフトウェア設計を独自に作成できます。"
        },
        {
          "id": "B",
          "text": "GitHub Copilot は、プロジェクトに関連する設計パターンとベスト プラクティスを提案できます。"
        },
        {
          "id": "C",
          "text": "GitHub Copilot は、設計チームのコラボレーションとバージョン管理を管理できます。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot は、プロンプトなしでユーザー インターフェイス (UI) プロトタイプを生成できます。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "在设计阶段，Copilot可以作为一个智能助手，**基于项目上下文（如技术栈、需求描述）推荐相关的设计模式、架构思路或最佳实践（B）**。它不能独立创建完整设计(A)、管理团队协作(C)或自动生成UI原型(D)。"
    },
    {
      "number": 45,
      "question": "GitHub Copilot Individual がプロンプトデータをどのように使用するかを正しく説明している記述は次のどれですか。(それぞれの正解は解決策の一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "プロンプト データは、処理を高速化するために暗号化されずに保存されます。"
        },
        {
          "id": "B",
          "text": "プロンプトデータは、検索エンジンを改善するために GitHub によって内部的に使用されます。"
        },
        {
          "id": "C",
          "text": "プロンプト データは、より優れたコード提案のために機械学習モデルをトレーニングするために使用されます。"
        },
        {
          "id": "D",
          "text": "リアルタイムのユーザー入力により、コンテキストに応じたコード提案が生成されます。"
        }
      ],
      "correctAnswer": [
        "C",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "Copilot Individual 使用用户数据的方式体现在两个层面：一是**系统层面（C）**：提示和数据可能被匿名化并用于改进（训练）底层模型。二是**实时交互层面（D）**：用户的即时输入被用于生成上下文感知的代码建议。选项A（未加密存储）和B（改善搜索引擎）描述不准确。"
    },
    {
      "number": 46,
      "question": "GitHub Copilot コード提案のライフサイクルに含まれるステップを特定しますか？ (それぞれの正解は解決策の一部を示しています。 2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "提案を生成する"
        },
        {
          "id": "B",
          "text": "ユーザーのコンテキストをキャプチャする"
        },
        {
          "id": "C",
          "text": "テレメトリデータの処理"
        },
        {
          "id": "D",
          "text": "モデルの再トレーニング"
        }
      ],
      "correctAnswer": [
        "A",
        "B"
      ],
      "isMultipleChoice": true,
      "explanation": "单次代码提案的“生命周期”指的是从用户开始输入到收到建议的**实时交互过程**。这个过程主要包括：1. **捕捉用户的上下文（B）**：分析当前文件、光标位置、项目结构等。2. **生成提案（A）**：基于理解的上下文，通过模型推理产生代码建议。选项C和D属于后台的系统运维和优化阶段。"
    },
    {
      "number": 47,
      "question": "商用サポートされているすべての IDE で利用できる Copilot Enterprise の機能はどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "インライン提案"
        },
        {
          "id": "B",
          "text": "プルリクエストの概要"
        },
        {
          "id": "C",
          "text": "ナレッジベース"
        },
        {
          "id": "D",
          "text": "チャット"
        }
      ],
      "correctAnswer": [
        "A",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "**インライン提案（Inline suggestions）（A）** 和 **チャット（Chat）（D）** 是Copilot最核心的交互功能，在所有受支持的IDE中普遍可用。而プルリクエストの概要（B）和ナレッジベース（C）是更高级的、与特定平台（如GitHub.com）深度集成的功能，并非在所有IDE中都可用。"
    },
    {
      "number": 48,
      "question": "GitHub Copilot はパフォーマンス向上のためにコードの最適化をどのように提案しますか？",
      "choices": [
        {
          "id": "A",
          "text": "コードベースを分析し、より効率的なアルゴリズムやデータ構造を提案します。"
        },
        {
          "id": "B",
          "text": "コードベースを自動的に書き換えて、より効率的なコードを使用します。"
        },
        {
          "id": "C",
          "text": "最適なパフォーマンスを保証する厳格なコーディング標準を適用します。"
        },
        {
          "id": "D",
          "text": "コードベースのパフォーマンスに関する詳細なレポートを提供します。"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot可以**分析现有代码，并就性能优化提出建议**，例如推荐更高效的算法、更好的数据结构或指出可能存在的性能瓶颈（A）。它不会自动重写整个代码库（B）、强制执行标准（C）或生成详细的性能报告（D），这些是开发者或专门工具的责任。"
    },
    {
      "number": 49,
      "question": "AI システムは理解可能であり、その仕組みについて明確な情報を提供する必要があることを強調する原則はどれですか。",
      "choices": [
        {
          "id": "A",
          "text": "公平性"
        },
        {
          "id": "B",
          "text": "透明性"
        },
        {
          "id": "C",
          "text": "包括性"
        },
        {
          "id": "D",
          "text": "説明責任"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "题干描述的“可理解且需提供清晰工作原理信息”正是**透明度 (Transparency)（B）** 原则的核心要求。该原则强调AI系统的决策过程应对用户开放和清晰。公平性（A）关注无偏见，包容性（C）关注广泛可用性，问责制（D）关注责任归属。"
    },
    {
      "number": 50,
      "question": "コンテンツ除外の制限とは何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "リポジトリ管理者と組織の所有者は、コンテンツの除外設定を管理できません。"
        },
        {
          "id": "B",
          "text": "コンテンツの除外は Git リポジトリでのみ使用できるため、回避できます。"
        },
        {
          "id": "C",
          "text": "コンテンツの除外は、エンタープライズ管理者のみが構成できます。"
        },
        {
          "id": "D",
          "text": "コンテンツの除外は、GitHub Copilot 個人プランでのみ利用できます。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "内容排除（Content Exclusion）是一项**企业级管理功能**。通常，其配置权限仅限于**企业（Enterprise）级别的管理员（C）**。组织所有者或仓库管理员可能无法直接配置。它并非仅在个人版中可用（D错误），也并非仅在Git仓库中使用（B表述不清且错误）。"
    },
    {
      "number": 51,
      "question": "Visual Studio における /optimize スラッシュ コマンドの主な役割は何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "コードをよりパフォーマンスの高い言語に変換します。"
        },
        {
          "id": "B",
          "text": "実行時の複雑さを分析して、選択したコードのパフォーマンスを向上させます。"
        },
        {
          "id": "C",
          "text": "選択したスタイル ガイドに従ってコードを自動的にフォーマットします。"
        },
        {
          "id": "D",
          "text": "ドキュメントをより保守しやすく読みやすい形式に要約します。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "“Optimize”命令（通常称为 `/optimize`）是GitHub Copilot Chat中的一个专用命令，其设计目的是**针对用户选中的代码段进行性能分析，并直接提供优化建议或生成优化后的代码版本（B）**，例如改进算法复杂度或数据结构。"
    },
    {
      "number": 52,
      "question": "エディターでコード候補が機能しない場合は、どのような理由が考えられますか？ (3 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": ".gitignoreに含まれるファイルで作業しています"
        },
        {
          "id": "B",
          "text": "インターネット接続がアクティブではありません"
        },
        {
          "id": "C",
          "text": "プログラミング言語はサポートされていません"
        },
        {
          "id": "D",
          "text": "コンテンツ除外が有効になっており、GitHub Copilot の使用がブロックされています"
        },
        {
          "id": "E",
          "text": "有効な GitHub Copilot ライセンスがありません"
        }
      ],
      "correctAnswer": [
        "B",
        "C",
        "E"
      ],
      "isMultipleChoice": true,
      "explanation": "代码补全功能失效的常见原因包括：1. **没有有效的互联网连接（B）**，因为Copilot需要云端服务。2. **当前编程语言不在Copilot支持范围内（C）**。3. **没有有效的Copilot许可证或订阅（E）**。处理.gitignore文件(A)不影响功能，内容排除(D)通常不会完全“阻止使用”，而是过滤特定内容。"
    },
    {
      "number": 53,
      "question": "AI の使用に関連するリスクは次のどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "AI アルゴリズムは既存のバイアスを引き継ぐことができません。"
        },
        {
          "id": "B",
          "text": "AI システムは、解釈が難しい決定を下すことがあります。"
        },
        {
          "id": "C",
          "text": "AI により、データ プライバシー規制の必要性がなくなります。"
        },
        {
          "id": "D",
          "text": "AI により、ほとんどの分野で開発者の機会の必要性がなくなります。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "AI系统，特别是复杂模型，存在“黑箱”问题，其**决策过程可能缺乏透明度和可解释性（B）**，这是其公认风险之一。AI的主要风险之一是可能放大和延续既有偏见，而非“无法继承”（A）。选项C和D的表述是错误的。"
    },
    {
      "number": 54,
      "question": "AI システムがすべての人を平等に扱うことを確実にすることを目的とした Microsoft の倫理 AI 原則はどれですか？",
      "choices": [
        {
          "id": "A",
          "text": "包括性"
        },
        {
          "id": "B",
          "text": "公平性"
        },
        {
          "id": "C",
          "text": "信頼性と安全性"
        },
        {
          "id": "D",
          "text": "プライバシーとセキュリティ"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "题干中“すべての人を平等に扱う”（确保对所有人都公平）这句话，正是 **“公平性” (Fairness)（B）** 原则的核心定义。包容性（A）更侧重于满足多样化用户的需求，而非特指“平等”。"
    },
    {
      "number": 55,
      "question": "GitHub Copilot は、開発者が手動で記述する定型コードの量をどのように削減するのでしょうか？",
      "choices": [
        {
          "id": "A",
          "text": "複数の開発者とリアルタイムで共同作業を行い、定型コードを作成します。"
        },
        {
          "id": "B",
          "text": "将来のコーディング要件を予測し、事前に定型コードを生成します。"
        },
        {
          "id": "C",
          "text": "コードベース全体をリファクタリングして、開発者の入力なしで定型コードを削除します。"
        },
        {
          "id": "D",
          "text": "プロジェクトのさまざまな部分で再利用できるコード スニペットを提案します。"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot减少样板代码的核心方式是在编码过程中，**根据当前上下文（如函数名、注释）智能地建议可重复使用的代码片段（D）**，例如常见的循环结构、API调用模板或错误处理块。它并非通过实时协作(A)、预测未来需求(B)或自动重构整个代码库(C)来实现这一目标。"
    },
    {
      "number": 56,
      "question": "GitHub Copilot ナレッジベースでは、どのような種類のコンテンツに関する質問に答えることができますか？ (それぞれの正解は解決策の一部を示しています。3 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "コードスニペット"
        },
        {
          "id": "B",
          "text": "コンパイルされたバイナリ"
        },
        {
          "id": "C",
          "text": "ドキュメント"
        },
        {
          "id": "D",
          "text": "デザインパターン"
        }
      ],
      "correctAnswer": [
        "A",
        "C",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "Copilot知识库（通常指Enterprise版中连接组织内部资料的功能）旨在帮助模型理解并基于组织的专有信息进行回答。它可以处理和回答关于**内部代码片段(A)、技术文档(C)、设计模式或架构指南(D)** 等问题。它无法理解或分析已编译的二进制文件(B)。"
    },
    {
      "number": 57,
      "question": "より正確な応答を得るために、GitHub Copilot にコンテキストを提供するさまざまな方法は何ですか？ (それぞれの正解は解決策の一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "コードやコメントなしで開発者の考えや意図を解釈するために使用します。"
        },
        {
          "id": "B",
          "text": "@workspace などのチャット参加者と連携して、応答に共同作業のコンテキストを組み込みます。"
        },
        {
          "id": "C",
          "text": "明示的な許可なしに開発者の以前のプロジェクトやコード リポジトリにアクセスして、コーディング スタイルを理解します。"
        },
        {
          "id": "D",
          "text": "*file などのチャット変数を使用して、使用中のファイルまたはエディターの特定のコンテキスト内で会話を固定します。"
        }
      ],
      "correctAnswer": [
        "B",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "为Copilot Chat提供额外上下文的有效方法包括：使用 **`@workspace`（B）** 或 **`@file`（D）** 等聊天变量将对话范围限定到特定文件或整个工作区。选项A（无代码猜测意图）和C（未经授权访问历史项目）都不是正确或可行的方法。"
    },
    {
      "number": 58,
      "question": "GitHub Copilot Chat は、コードベースのセキュリティ問題の修正にどのように役立ちますか？",
      "choices": [
        {
          "id": "A",
          "text": "脆弱性の導入を防ぐ厳格なコーディング標準を実施します。"
        },
        {
          "id": "B",
          "text": "コードベースに存在するセキュリティ上の脆弱性に関する詳細なレポートを提供します。"
        },
        {
          "id": "C",
          "text": "与えられた提案に既知の脆弱性パターンを注釈付けします。"
        },
        {
          "id": "D",
          "text": "コードベース全体を自動的にリファクタリングして脆弱性を除去します。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "当Copilot Chat生成代码建议时，它可能会**附带标记出其中可能存在的、已知的不安全编码模式（C）**（例如，提示某个函数可能存在注入风险）。这有助于开发者在编写代码的当下，结合上下文识别潜在漏洞。它并不强制执行标准(A)、生成详细报告(B)或自动重构整个代码库(D)。"
    },
    {
      "number": 59,
      "question": "GitHub Copilot を使用して、コードのリファクタリングに関するインライン提案を取得するにはどうすればよいですか？ (2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "コードにコメントを追加して提案をトリガーします。"
        },
        {
          "id": "B",
          "text": "修正するコードをハイライトし、右クリックして、「GitHub Copilot を使用して修正」を選択します。"
        },
        {
          "id": "C",
          "text": "gh copilot fix コマンドを実行します。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot インライン チャットで「/fix」コマンドを使用します。"
        },
        {
          "id": "E",
          "text": "修正するコードをハイライト表示し、右クリックして、「GitHub Copilot を使用してリファクタリング」を選択します。"
        }
      ],
      "correctAnswer": [
        "A",
        "E"
      ],
      "isMultipleChoice": true,
      "explanation": "在IDE中获得重构建议的两种典型方式是：1. 在代码上方或旁边**添加描述性的注释（A）**，然后触发内联建议。2. 在编辑器中**右键选中代码，从上下文菜单中选择“使用GitHub Copilot重构”（E）**。选项D中的 `/fix` 命令更侧重于错误修复，B和C不是标准的内联交互方式。"
    },
    {
      "number": 60,
      "question": "GitHub Copilot Chat のデータフローにおいて、ユーザー入力の前処理はどのような役割を果たしますか？",
      "choices": [
        {
          "id": "A",
          "text": "ユーザーの入力プロンプトから無関係な情報を除外します。"
        },
        {
          "id": "B",
          "text": "入力プロンプトを言語モデルに渡す前に、追加のコンテキストで強化します。"
        },
        {
          "id": "C",
          "text": "ユーザーの入力プロンプトに基づいて応答を直接生成します。"
        },
        {
          "id": "D",
          "text": "出力応答をユーザーに提示する前にフォーマットします。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "“前処理”（Pre-processing）在Copilot Chat工作流中指的是在将用户输入发送给核心语言模型（LLM）**之前**，对输入进行增强。这个过程会**自动将当前打开的文件、光标位置、选中的代码以及可能的会话历史等上下文信息，整合到用户原始的提问中（B）**，从而形成一个更丰富、更具上下文的提示词。"
    },
    {
      "number": 61,
      "question": "コンテンツ除外を使用して除外するように設定できるコンテンツは何ですか？ (それぞれの正解は解決策の一部を示しています。3 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "ファイル"
        },
        {
          "id": "B",
          "text": "フォルダ"
        },
        {
          "id": "C",
          "text": "ファイル内の行"
        },
        {
          "id": "D",
          "text": "要点"
        },
        {
          "id": "E",
          "text": "リポジトリ"
        }
      ],
      "correctAnswer": [
        "A",
        "B",
        "E"
      ],
      "isMultipleChoice": true,
      "explanation": "GitHub Copilot的内容排除（Content Exclusion）功能允许管理员在多个粒度级别上配置策略：可以排除**整个文件（A）、整个目录/文件夹（B）、或整个仓库（E）**，防止Copilot参考这些内容。通常不能排除单个代码行（C）或要点（D，可能指Gist）。"
    },
    {
      "number": 62,
      "question": "GitHub Copilot は、ソフトウェア開発ライフサイクル (SDLC) の要件分析フェーズで開発者をどのように支援できますか？",
      "choices": [
        {
          "id": "A",
          "text": "詳細な要件ドキュメントを自動的に生成します。"
        },
        {
          "id": "B",
          "text": "要件の文書化に役立つテンプレートとコード スニペットを提供します。"
        },
        {
          "id": "C",
          "text": "/help を使用するときに潜在的な要件の競合を識別して修正します。"
        },
        {
          "id": "D",
          "text": "利害関係者とのコミュニケーションと会議を管理します。"
        }
      ],
      "correctAnswer": [
        "B"
      ],
      "isMultipleChoice": false,
      "explanation": "在需求分析阶段，Copilot可以作为一个辅助工具，**基于用户输入的自然语言描述，生成需求文档的模板、大纲或结构化的代码片段（B）**，以帮助初始文档化。它不能自动生成完整详细的文档（A）、解决需求冲突（C）或管理沟通（D）。"
    },
    {
      "number": 63,
      "question": "オープンソース プロジェクトに取り組んでいる場合は、GitHub Copilot Individual を有料で利用できます。",
      "choices": [
        {
          "id": "A",
          "text": "ユーザープロフィールの支払い方法に基づいて"
        },
        {
          "id": "B",
          "text": "N/A - Copilot Individualはすべてのオープンソースプロジェクト向けの無料サービスです"
        },
        {
          "id": "C",
          "text": "請求書またはクレジットカードを通じて"
        },
        {
          "id": "D",
          "text": "Azureサブスクリプションを通じて"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "GitHub Copilot Individual 是付费订阅服务，无论是否用于开源项目。其**计费方式与用户在GitHub个人资料中配置的付款方式绑定（A）**。没有通用的“所有开源项目免费”政策（B）。"
    },
    {
      "number": 64,
      "question": "GitHub Copilot はチャット履歴をどのように活用してコード補完機能を強化するのでしょうか？",
      "choices": [
        {
          "id": "A",
          "text": "チャット履歴を使用して、以前のプロンプトに基づいてパーソナライズされたコード スニペットを提供します。"
        },
        {
          "id": "B",
          "text": "チャット履歴を記録してユーザーのアクティビティを監視し、コーディング標準への準拠を確保します。"
        },
        {
          "id": "C",
          "text": "過去のチャットのやり取りを分析して、一般的なプログラミング パターンとエラーを特定します。"
        },
        {
          "id": "D",
          "text": "チャット履歴をサードパーティのサービスと共有することで、統合と機能性を向上させます。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot利用当前会话的聊天历史的主要目的是提供**个性化且上下文连贯**的体验。通过参考同一对话中之前的提问和回答，它能**分析模式、识别常见的编码风格和潜在错误（C）**，从而提供更相关、更准确的代码建议和补全。"
    },
    {
      "number": 65,
      "question": "コード リファクタリングに GitHub Copilot を使用する場合に考慮すべき制限はありますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot は、リファクタリングのために最適化されたコードやベストプラクティスのコードを常に生成するとは限りません。"
        },
        {
          "id": "B",
          "text": "GitHub Copilot は、限られたプログラミング言語でのみ使用できます。"
        },
        {
          "id": "C",
          "text": "GitHub Copilot は、リファクタリング中に常にバグのないコードを生成します。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot はプロジェクト全体のコンテキストを理解し、それに応じてコードをリファクタリングします。"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot在重构时是一个强大的代码生成助手，但它**缺乏对重构过程进行系统性规划、分析和记录的能力**。其生成的代码可能**未遵循最佳实践、不够优化，甚至可能引入新的错误（A）**，必须由开发者审查验证。它支持多种主流语言（B并非主要限制），也不能保证无错（C）或完全理解整个项目（D）。"
    },
    {
      "number": 66,
      "question": "GitHub Copilot はコード リファクタリング タスクをどのように支援しますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot は、ユーザー入力なしで構文エラーを修正できます。"
        },
        {
          "id": "B",
          "text": "GitHub Copilot は、ベストプラクティスに従ってコードを自動的に書き換えることができます。"
        },
        {
          "id": "C",
          "text": "GitHub Copilot は、コード品質を向上させるためにリファクタリングの改善を提案できます。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot はプロジェクト ディレクトリから不要なファイルを削除できます。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "在代码重构场景中，Copilot的核心作用是作为一个智能助手，**分析现有代码，并就如何改进代码结构、可读性、可维护性提出具体的重构建议（C）**。它不能自动修复语法错误（A）、自动按最佳实践重写代码（B）或管理文件系统（D）。"
    },
    {
      "number": 67,
      "question": "GitHub は Business および Enterprise の Copilot データをどのくらいの期間保持しますか？ (それぞれの正解は解決策の一部を示しています。2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "プロンプトと提案: 保持されません"
        },
        {
          "id": "B",
          "text": "プロンプトと提案: 28日間保存されます"
        },
        {
          "id": "C",
          "text": "ユーザーエンゲージメントデータ: 2年間保存"
        },
        {
          "id": "D",
          "text": "ユーザーエンゲージメントデータ: 1年間保存"
        }
      ],
      "correctAnswer": [
        "B",
        "C"
      ],
      "isMultipleChoice": true,
      "explanation": "根据GitHub的隐私声明，对于Business和Enterprise计划：用户的**具体提示词（Prompts）和代码建议（Suggestions）内容会保留一段时间（通常是28天）（B）**，用于服务改进和安全目的。而**聚合的、去识别化的使用情况数据（用户互动数据）可能会保留更长时间（例如2年）（C）**用于分析。"
    },
    {
      "number": 68,
      "question": "ソーシャルメディアマネージャーがAIを活用してコンテンツをフィルタリングしたいと考えています。プラットフォームのAI運用の透明性を高めるにはどうすればよいでしょうか？",
      "choices": [
        {
          "id": "A",
          "text": "AI フィルタリング アルゴリズムを定期的に更新します。"
        },
        {
          "id": "B",
          "text": "評判の高い AI 開発会社に依頼することで。"
        },
        {
          "id": "C",
          "text": "コンテンツ フィルタリングに対するユーザー満足度に重点を置きます。"
        },
        {
          "id": "D",
          "text": "AI がフィルタリングするように設計されたコンテンツの種類と、その結論に到達する方法について明確な説明を提供します。"
        }
      ],
      "correctAnswer": [
        "D"
      ],
      "isMultipleChoice": false,
      "explanation": "AI系统的“透明度”原则要求其运作方式对用户清晰可理解。对于内容过滤，促进透明度的最佳实践是**向用户公开说明过滤的标准、规则以及决策过程（D）**，即使不公开所有算法细节，也应提供高层次的解释。其他选项不是直接提升透明性的方法。"
    },
    {
      "number": 69,
      "question": "数学的計算の支援のために GitHub Copilot を使用する場合、開発者はどのような注意を払う必要がありますか？",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot は、手動コーディングを超えて複雑な数学アルゴリズムを最適化する機能を持っています。"
        },
        {
          "id": "B",
          "text": "GitHub Copilot は数学的な結果をリアルタイムで実行し、検証することができます。"
        },
        {
          "id": "C",
          "text": "GitHub Copilot は計算の精度を検証せずにパターンベースの応答に依存しています。"
        },
        {
          "id": "D",
          "text": "GitHub Copilot は、古くなった数式を最新の標準に自動的に更新します。"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "Copilot的本质是基于大量代码模式生成建议，它**并不具备数学推理或验证能力**。对于数学计算，它可能生成语法正确但逻辑或结果错误的代码，因为它是基于统计模式“模仿”，而非实际“计算”。因此，开发者必须**谨慎验证其生成的任何数学相关代码的准确性（C）**。其他选项都夸大了它的能力。"
    },
    {
      "number": 70,
      "question": "1.blog.yatricloud.comblog.yatricloud.com",
      "choices": [
        {
          "id": "A",
          "text": "API は、GitHub Copilot によって行われたコード品質の改善に関する詳細なレポートを生成できます。"
        },
        {
          "id": "B",
          "text": "API は、組織内で受け入れられ、使用されているコード提案の受け入れ率を追跡できます。"
        },
        {
          "id": "C",
          "text": "API を使用すると、コードをリファクタリングして生産性を向上させることができます。"
        },
        {
          "id": "D",
          "text": "API はコーディング スタイルと標準準拠に関するフィードバックを提供できます。"
        },
        {
          "id": "E",
          "text": "API は、Copilot Chat 固有の提案受け入れメトリックを提供できます。"
        }
      ],
      "correctAnswer": [
        "B",
        "E"
      ],
      "isMultipleChoice": true,
      "explanation": "使用情况指标API（Metrics API）的核心功能是**收集和报告关于Copilot使用情况的量化数据**，例如：代码建议的总接受率（B）以及Copilot Chat特定的建议接受量（E）。API本身不具备分析代码质量（A）、重构代码（C）或提供编码风格反馈（D）的能力。"
    },
    {
      "number": 71,
      "question": "どの GitHub Copilot 料金プランに、使用状況、プロンプト、デフォルトのトレーニング GitHub Copilot からの提案などの GitHub Copilot データを除外する機能が含まれていますか？ (正しい回答を 2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "GitHub Copilot ビジネス"
        },
        {
          "id": "B",
          "text": "GitHub Copilot コードスペース"
        },
        {
          "id": "C",
          "text": "GitHub Copilot 個人"
        },
        {
          "id": "D",
          "text": "GitHub Copilot エンタープライズ"
        }
      ],
      "correctAnswer": [
        "A",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "确保用户数据**不用于改进（训练）面向其他用户的通用Copilot模型**，是企业级订阅的一项关键隐私保障。这项功能包含在 **GitHub Copilot Business 和 Enterprise 计划中（A, D）**。个人版（C）的数据可能用于服务改进。"
    },
    {
      "number": 72,
      "question": "GitHub Copilot Business の監査ログ イベントにアクセスする正しい方法は何ですか？",
      "choices": [
        {
          "id": "A",
          "text": "組織のGitHub設定のセキュリティタブに移動します"
        },
        {
          "id": "B",
          "text": "リポジトリ設定のInsightsタブに移動します"
        },
        {
          "id": "C",
          "text": "組織のGitHub設定の監査ログセクションを使用する"
        },
        {
          "id": "D",
          "text": "GitHubリポジトリのコードタブを使用する"
        }
      ],
      "correctAnswer": [
        "C"
      ],
      "isMultipleChoice": false,
      "explanation": "在GitHub上，组织级别的**監査ログ（Audit log）** 有统一的访问位置：进入组织设置页面，找到专门的 **“Audit log” 部分（C）**。这是查看所有组织活动（包括Copilot相关管理操作）的标准路径。"
    },
    {
      "number": 73,
      "question": "重複検出を構成するために移動する 2 つのオプションは何ですか？ (それぞれの正解は解決策の一部を示しています。 2 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "エンタープライズ設定 # Copilot # ポリシー"
        },
        {
          "id": "B",
          "text": "リポジトリ設定 # Copilot # ポリシー"
        },
        {
          "id": "C",
          "text": "組織設定 # Copilot # ポリシー"
        },
        {
          "id": "D",
          "text": "ユーザー設定 # Copilot # ポリシー"
        }
      ],
      "correctAnswer": [
        "A",
        "C"
      ],
      "isMultipleChoice": true,
      "explanation": "重复检测（Duplicate Detection）或代码相似性过滤是一项**组织或企业级的管理策略**。因此，它需要在**エンタープライズ（企业）或组织（Organization）级别的设置菜单中进行配置（A, C）**，而不是在单个仓库（B）或用户（D）级别。"
    },
    {
      "number": 74,
      "question": "GitHub Copilot が提供する提案の品質を高めるには、どのような方法がありますか？ (3 つ選択してください。)",
      "choices": [
        {
          "id": "A",
          "text": "問題またはタスクを明確に定義する"
        },
        {
          "id": "B",
          "text": "コードコメントに個人情報を含める"
        },
        {
          "id": "C",
          "text": "意味のある変数名を使用する"
        },
        {
          "id": "D",
          "text": "望ましい出力の例を示す"
        }
      ],
      "correctAnswer": [
        "A",
        "C",
        "D"
      ],
      "isMultipleChoice": true,
      "explanation": "提升Copilot建议质量的技巧都属于“Prompt Engineering”的范畴。选项A（明确定义问题）、C（使用有意义的变量名提供上下文）和D（提供期望输出的示例）都是非常有效的方法，能为模型提供清晰的目标和丰富的线索。选项B（在注释中包含个人信息）是安全风险，应予避免。"
    },
    {
      "number": 75,
      "question": "IP 侵害から保護するには、どのような GitHub Copilot 構成を有効にする必要がありますか？",
      "choices": [
        {
          "id": "A",
          "text": "公開コードの一致をブロックする"
        },
        {
          "id": "B",
          "text": "ライセンスチェック構成をブロックしています"
        },
        {
          "id": "C",
          "text": "公開コードの一致を許可する"
        },
        {
          "id": "D",
          "text": "ライセンスチェックの設定を許可する"
        }
      ],
      "correctAnswer": [
        "A"
      ],
      "isMultipleChoice": false,
      "explanation": "防止知识产权（IP）侵权（即避免生成与公共代码库完全相同的代码）的核心配置是启用 **“Blocking public code matches”（阻止公共代码匹配）（A）** 功能。这会触发代码相似性检测过滤器。"
    }
  ]
};
